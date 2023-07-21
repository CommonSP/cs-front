import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddProductModalComponent} from "../add-product-modal/add-product-modal.component";
import {AdministrationService} from "../../services/administration.service";
import {ActivatedRoute} from "@angular/router";
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

	constructor(private dialog: MatDialog, private administrationService: AdministrationService, private route: ActivatedRoute) {
	}
	@ViewChild('image') image: ElementRef | null = null
	fReader = new FileReader()


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
			 this.image!.nativeElement.src = e!.target!.result
			}

		}
	}

	addProduct() {
		this.dialog.open(AddProductModalComponent, {width: '300px'}).afterClosed().subscribe((product: IProduct | null) => {
			if (product) {
				this.sale?.products.push(product)
			}
		})
	}

	getSale() {
		this.administrationService.getSaleById(this.saleId).subscribe(res => {
			if (res) {
				this.sale = res
				console.log(res)
				this.patchValue()
			}
		})
	}

	patchValue() {
		console.log(this.sale)
		this.formSale.patchValue(this.sale)
	}

	save() {
		this.sale.name = this.formSale.get('name')?.value
		this.sale.discount = this.formSale.get('discount')?.value
		if (this.isNew) {

			this.administrationService.saveSale(this.sale).subscribe((res: any) => {
				this.onUpload(res.id)
			})
		} else {

			this.administrationService.updateSale(this.sale).subscribe(res => {
			})
		}

	}


	onUpload(id: string) {
		if (this.file) {
			this.administrationService.upload(this.file, id).subscribe(res => {
					console.log(res)
				}
			)
		}
	}

	onChange(event: any) {
		this.file = event.target.files[0];
		this.fReader.readAsDataURL(this.file as Blob);
	}

	protected readonly SALE_IMAGE = SALE_IMAGE;
}
