import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core'
import { CatalogService } from '../../services/catalog.service'
import { IProduct } from '../../../../../models/product'
import { ActivatedRoute, Router } from '@angular/router'
import { SETTINGS } from '../../config'
import { PRODUCT_IMAGE } from '../../../../../config/config'
import { AuthService } from '../../../../../auth/services/auth.service'

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {

	product: any
	productId: string = ''
	product_image = PRODUCT_IMAGE
	mainCategory: string = ''
	subCategory: string = ''
	pageIndex: number = 0

	constructor(private renderer: Renderer2,
				private catalogService: CatalogService,
				private route: ActivatedRoute,
				private router: Router,
				public authService: AuthService) {
	}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.productId = params['id']
			this.catalogService.getProductByGuid(this.productId).subscribe((res: IProduct) => {
				this.product = res
			})
		})
		this.route.queryParams.subscribe(params => {
			this.mainCategory = params['mainCategory'] || ''
			this.subCategory = params['subCategory'] || ''
			this.pageIndex = params['pageIndex']
		})
		this.renderer.addClass(document.body, 'test')
	}

	ngOnDestroy() {
		this.renderer.removeClass(document.body, 'test')
	}

	protected readonly Object = Object
	protected readonly SETTINGS = SETTINGS

	back() {
		this.router.navigate(['catalog', 'products'], {
			queryParams: {
				pageIndex: this.pageIndex,
				subCategory: this.subCategory,
				mainCategory: this.mainCategory
			},
		})
	}
}
