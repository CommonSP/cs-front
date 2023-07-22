import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {CatalogService} from "../../services/catalog.service";
import {IProduct} from "../../../../../models/product";
import {ActivatedRoute} from "@angular/router";
import {ISettings, SETTINGS} from "../../config";
import {PRODUCT_IMAGE} from "../../../../../config/config";

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

	product: any
	productId: string = ""
	settings: Map<string, ISettings[]> = SETTINGS
	product_image = PRODUCT_IMAGE
	constructor(private renderer: Renderer2, private catalogService: CatalogService, private route: ActivatedRoute) {
	}

	getSettings(category: string) {
		if (this.settings.has(category)) {
			return this.settings.get(category)
		} else {
			return [] as ISettings[]
		}

	}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.productId = params["id"]
			this.catalogService.getProductByGuid(this.productId).subscribe((res: IProduct) => {
				this.product = res
			})
		})
		this.renderer.addClass(document.body, "test")
	}

	ngOnDestroy() {
		this.renderer.removeClass(document.body, "test")
	}

}
