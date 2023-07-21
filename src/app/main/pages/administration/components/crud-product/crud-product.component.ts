import {Component, OnInit} from '@angular/core';
import {ISettings, SETTINGS} from "../../settings";
import {IProduct} from "../../../../../models/product";
import {ActivatedRoute} from "@angular/router";
import {AdministrationService} from "../../services/administration.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
	selector: 'app-crud-product',
	templateUrl: './crud-product.component.html',
	styleUrls: ['./crud-product.component.scss']
})
export class CrudProductComponent implements OnInit {

	settings: Map<string, ISettings[]> = SETTINGS
	product: any = null
	settingsForm: FormGroup = new FormGroup([])
	mainImage: boolean = true
	constructor(private route: ActivatedRoute, private administrationService: AdministrationService) {
	}

	ngOnInit(): void {
		this.route.params.subscribe(params=>{
			const productGuid = params['guid']
			this.administrationService.getProductByGuid(productGuid).subscribe(res=>{
				this.product =res
				console.log(res)
				this.initializeForm()
			})
		})
	}

	initializeForm(){
		if(this.product){
			this.settings.get(this.product?.nasnacheniy!)?.forEach(setting=>{
				this.settingsForm.addControl(setting.name, new FormControl(this.product[setting.name]))
			})
			this.settingsForm.addControl("opisanie", new FormControl(this.product.opisanie))
			this.settingsForm.addControl("price", new FormControl(this.product.price))
			this.settingsForm.addControl("price_opt", new FormControl(this.product.price_opt))
		}

	}

	save() {

		this.administrationService.updateProductByGuid(this.product.guid, this.settingsForm.value ).subscribe(res=>{
			console.log(res)
		})
	}
}
