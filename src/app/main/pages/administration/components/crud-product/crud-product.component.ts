import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ISettings, SETTINGS } from '../../settings'
import { IProduct } from '../../../../../models/product'
import { ActivatedRoute, Router } from '@angular/router'
import { AdministrationService } from '../../services/administration.service'
import { FormControl, FormGroup } from '@angular/forms'
import { PRODUCT_IMAGE, SALE_IMAGE } from 'src/app/config/config'
import { IImage } from '../../../../../models/image'
import {
	logExperimentalWarnings,
} from '@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings'

@Component({
	selector: 'app-crud-product',
	templateUrl: './crud-product.component.html',
	styleUrls: ['./crud-product.component.scss'],
})
export class CrudProductComponent implements OnInit {
	fReader = new FileReader()
	settings: Map<string, ISettings[]> = SETTINGS
	product: any = null
	settingsForm: FormGroup = new FormGroup([])
	mainImage: boolean = true
	file: File | null = null
	updatedImage: boolean = false

	main_image: IImage | null = null
	subImages: IImage[] = []

	product_image = PRODUCT_IMAGE

	@ViewChild('image') image: ElementRef | null = null
	@ViewChild('imageNew') imageNew: ElementRef | null = null
	@ViewChild('input') input: ElementRef | null = null
	isNew: boolean = true

	constructor(private route: ActivatedRoute,
				private administrationService: AdministrationService,
				private router: Router) {
	}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			const productGuid = params['guid']
			this.administrationService.getProductByGuid(productGuid).subscribe(res => {
				this.product = res
				res.images.forEach(image => {
					if (image.category == 'main') {
						this.main_image = image
					} else {
						this.subImages.push(image)
					}
				})
				this.initializeForm()
			})
		})

		this.fReader.onload = (e) => {
			if (document !== null) {
				this.imageNew!.nativeElement.src = e!.target!.result
			}

		}
	}

	initializeForm() {
		if (this.product) {
			this.settings.get(this.product?.nasnacheniy!)?.forEach(setting => {
				this.settingsForm.addControl(setting.name, new FormControl(this.product[setting.name]))
			})
			this.settingsForm.addControl('opisanie', new FormControl(this.product.opisanie))
			this.settingsForm.addControl('price', new FormControl(this.product.price))
			this.settingsForm.addControl('price_opt', new FormControl(this.product.price_opt))
		}

	}

	onUpload(id: string) {
		if (this.file && this.updatedImage) {
			this.administrationService.uploadMainImageProduct(this.file, id).subscribe(res => {
					this.updatedImage = false
					this.main_image = res
				},
			)
		}
	}

	protected readonly SALE_IMAGE = SALE_IMAGE

	onChange(event: any) {
		this.file = event.target.files[0]
		this.fReader.readAsDataURL(this.file as Blob)
		this.updatedImage = true
	}

	save() {
		this.administrationService.updateProductByGuid(this.product.guid, this.settingsForm.value).subscribe(res => {
			this.onUpload(this.product.guid)
			this.router.navigate(['administration'])
		})
	}

	cancel() {
		let isConfirm = confirm('Вы уверены что хотите завершить редактирование?')
		if (isConfirm) {
			this.router.navigate(['administration'])
		}
	}
}
