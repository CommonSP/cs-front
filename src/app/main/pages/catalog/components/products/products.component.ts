import {Component, EventEmitter, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogService} from "../../services/catalog.service";
import {Subject} from "rxjs";
import {IProduct} from "../../../../../models/product";
import {AuthService} from "../../../../../auth/services/auth.service";
import {PageEvent} from "@angular/material/paginator";

interface ISubCategories {
	title: string,
	img: string
	subCategory: string
}

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	mainCategory: string = ''
	subCategory: string = ''
	products: IProduct[] = []

	totalCount: number = 0
	pageIndex: number = 0

	limit: number = 10
	offset: number = 0

	subCategories: Map<string, ISubCategories[]> = new Map([
		[
			'умывальники',
			[
				{
					title: 'Смеситель для умывальника однорукояточный',
					img: '35abe4b0-7f12-0e69-193d-d74820df14bf.svg',
					subCategory: 'Залупа'
				},
				{
					title: 'Смеситель для умывальника двухрукояточный',
					img: 'b5760e89-e155-4cd1-4354-32d2dc9c81fe.svg',
					subCategory: 'Залупа'
				}
			]
		]
	])


	constructor(
		private route: ActivatedRoute,
		private catalogService: CatalogService,
		public authService: AuthService,
		private router: Router
	) {
	}


	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.mainCategory = params['mainCategory'] || ''
			this.subCategory = params['subCategory'] || ''

			this.getProducts()
		})
	}


	getProducts() {
		this.catalogService.getProducts(this.limit, this.offset, this.mainCategory, this.subCategory).subscribe(res => {
			this.products = res.items
			this.totalCount = res.total_count
		})
	}

	handlePageEvent($event: PageEvent) {
		this.pageIndex = $event.pageIndex
		this.limit = $event.pageSize
		console.log(this.limit)
		this.offset = this.pageIndex * this.limit

		this.getProducts()
	}

	openProduct(guid: string) {
		this.router.navigate(['catalog', 'product', guid],)
	}
}
