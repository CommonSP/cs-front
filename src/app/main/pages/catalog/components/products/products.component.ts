import {Component, EventEmitter, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogService} from "../../services/catalog.service";
import {Subject} from "rxjs";
import {IProduct} from "../../../../../models/product";
import {AuthService} from "../../../../../auth/services/auth.service";
import {PageEvent} from "@angular/material/paginator";
import {PRODUCT_IMAGE} from "../../../../../config/config";

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
	product_image = PRODUCT_IMAGE
	mainCategory: string = ''
	subCategory: string = ''
	products: IProduct[] = []

	totalCount: number = 0
	pageIndex: number = 0

	limit: number = 10
	offset: number = 0

	subCategories: Map<string, ISubCategories[]> = new Map([
		[
			'Для умывальника',
			[
				{
					title: 'Смеситель для умывальника однорукояточный',
					img: '35abe4b0-7f12-0e69-193d-d74820df14bf.svg',
					subCategory: 'Однорукояточное'
				},
				{
					title: 'Смеситель для умывальника двухрукояточный',
					img: 'b5760e89-e155-4cd1-4354-32d2dc9c81fe.svg',
					subCategory: 'Двухрукояточное'
				}
			]
		],
		[
			'Для кухни',
			[
				{
					title: 'Смеситель для кухонной мойки однорукояточный',
					img: '35abe4b0-7f12-0e69-193d-d74820df14bf.svg',
					subCategory: 'Однорукояточное'
				},
				{
					title: 'Смеситель для кухонной мойки двухрукояточный',
					img: 'b5760e89-e155-4cd1-4354-32d2dc9c81fe.svg',
					subCategory: 'Двухрукояточное'
				}
			]
		],
		[
			'Смесители для ванной комнаты и душевых кабин',
			[
				{
					title: 'Смеситель для ванной и умывальника с дайвотером однорукояточный',
					img: 'Layer4.svg',
					subCategory: 'Ванна с дайвотером'
				},
				{
					title: 'Смеситель для ванной и умывальника однорукояточный',
					img: 'Layer2.svg',
					subCategory: 'Ванна однорукояточный'
				},
				{
					title: 'Смеситель для ванной и умывальника литой однорукояточный',
					img: 'Layer3.svg',
					subCategory: 'Ванна литой корпус'
				},
				{
					title: 'Смеситель для ванной и умывальника литой двухрукояточный',
					img: 'Layer1.svg',
					subCategory: 'Ванна двухрукояточный'
				}
			]
		],
		[
			'Комплектация',
			[]
		],
		[
			'Душевая система',
			[]
		],
		[
			'Душевая стойка',
			[]
		],
		[
			'Шланг душевой',
			[]
		],
		[
			'Гибкие соединения',
			[
				{
					title: 'Подводка для воды',
					img: 'Group125.svg',
					subCategory: 'Для воды'
				},
				{
					title: 'Подводка для смесителей',
					img: 'Group126.svg',
					subCategory: 'Для смесителя'
				},
				{
					title: 'Подводка ГИГАНТ',
					img: 'Group127.svg',
					subCategory: 'Гигант'
				},
				{
					title: 'Заливные шланги',
					img: 'Group128.svg',
					subCategory: 'Заливной'
				}
			]
		],
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
		this.offset = this.pageIndex * this.limit
		this.getProducts()
	}

	openProduct(guid: string) {
		this.router.navigate(['catalog', 'product', guid],)
	}

	back() {
		if(this.subCategory){
			this.subCategory = ''
			this.getProducts()
		}else {
			this.router.navigate(['catalog'])
		}
	}

	getProductsBySubCategory(subCategory: string) {
		this.subCategory = subCategory
		this.getProducts()
	}
}
