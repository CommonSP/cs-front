import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddProductModalComponent} from "../add-product-modal/add-product-modal.component";
import {AdministrationService} from "../../services/administration.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ISale} from "../../../../../models/sale";
import {IProduct} from "../../../../../models/product";
import {FormControl, FormGroup} from "@angular/forms";
import {SALE_IMAGE} from "../../../../../config/config";

@Component({
	selector: 'app-crud-sale',
	templateUrl: './crud-sale.component.html',
	styleUrls: ['./crud-sale.component.scss']
})
export class CrudSaleComponent implements OnInit {

	constructor(
		private dialog: MatDialog,
		private administrationService: AdministrationService,
		private route: ActivatedRoute,
		private router: Router
	) {
	}
	@ViewChild('image') image: ElementRef | null = null
	@ViewChild('imageNew') imageNew: ElementRef | null = null
	@ViewChild('input') input: ElementRef | null = null

	fReader = new FileReader()

	sale_image = SALE_IMAGE
	isNew: boolean = true
	saleId: string = ''
	sale: ISale = {
		id: '0',
		name: '',
		products: [],
		discount: 0,
		image: 'aaaa'
	}
	file: File | null = null;
	updatedImage: boolean = false
//СМ506402
	//СМ506418
	formSale: FormGroup = new FormGroup({
		name: new FormControl<string>(''),
		discount: new FormControl<number>(0)
	})

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.saleId = params['id']
			if (this.saleId == '0') {
				this.isNew = true
			} else {
				this.getSale()
				this.isNew = false
			}
		})
		this.fReader.onload = (e)=> {
			if(document!==null){
				if(this.isNew){
					this.imageNew!.nativeElement.src = e!.target!.result
				}else {
					this.image!.nativeElement.src = e!.target!.result
				}


			}

		}
	}



	addProduct() {
		this.dialog.open(AddProductModalComponent, {width: '300px'}).afterClosed().subscribe((product: IProduct | null) => {
			if (product) {
				if(this.sale.products){
					this.sale?.products.push(product)
				}
			}
		})
	}
	deleteProduct(guid: string){
		let index = this.sale.products.findIndex(p=> p.guid==guid)
		if(index!==-1){
			this.sale.products.splice(index,1)
		}
	}

	getSale() {
		this.administrationService.getSaleById(this.saleId).subscribe(res => {
			if (res) {
				this.sale = res
				this.patchValue()
			}
		})
	}
	deleteSale(){
		this.administrationService.deleteSale(this.sale.id).subscribe(res=>{
			this.router.navigate(['administration','setting-sales'])
		})
	}

	patchValue() {
		this.formSale.patchValue(this.sale)
	}

	save() {
		this.sale.name = this.formSale.get('name')?.value
		this.sale.discount = this.formSale.get('discount')?.value
		if (this.isNew) {
			this.administrationService.saveSale(this.sale).subscribe((res: any) => {
				this.onUpload(res.id)
				this.router.navigate(['administration','setting-sales'])
			})
		} else {
			this.administrationService.updateSale(this.sale).subscribe((res:any) => {
				this.onUpload(res.id)
				this.router.navigate(['administration','setting-sales'])
			})
		}

	}


	onUpload(id: string) {
		if (this.file && this.updatedImage) {
			this.administrationService.upload(this.file, id).subscribe(res => {
				this.updatedImage = false
				}
			)
		}
	}

	onChange(event: any) {
		this.file = event.target.files[0];
		this.fReader.readAsDataURL(this.file as Blob);
		this.updatedImage = true
	}


	selectImage() {
		this.input?.nativeElement.click()
	}


	cancel() {
		let isConfirm = confirm('Вы уверены что хотите завершить редактирование?')
		if(isConfirm){
			this.router.navigate(['administration', 'setting-sales'])
		}
	}
}
