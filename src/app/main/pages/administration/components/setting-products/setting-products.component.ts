import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../../../models/product";
import {CatalogService} from "../../../catalog/services/catalog.service";
import {AdministrationService} from "../../services/administration.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-setting-products',
	templateUrl: './setting-products.component.html',
	styleUrls: ['./setting-products.component.scss']
})
export class SettingProductsComponent implements OnInit {

	valueSearch: string = ''
	products: IProduct[] = []

	constructor(private administrationService: AdministrationService, private router: Router) {
	}

	ngOnInit(): void {

	}


	search(value: string) {
		this.administrationService.searchProductByArticle(value).subscribe(res => {
			console.log(res)
			this.products = res
		})
	}

	openSetting(guid: string) {
		console.log(guid)
		this.router.navigate(['administration', 'crud-product', guid])

	}
}
