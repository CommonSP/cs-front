import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ISale} from "../../../../models/sale";
import {HomeService} from "../services/home.service";
import {SALE_IMAGE} from "../../../../config/config";
import {environment} from "../../../../../environments/environment.prod";

@Component({
	selector: 'app-layout',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	@ViewChild('linc') linc: ElementRef | null = null
	baseurl = environment.baseUrl

	constructor(private router: Router, private homeService: HomeService) {
	}

	@ViewChild('carousel') carousel: ElementRef | null = null
	indexImage: number = 0
	sales: ISale[] = []
	sale_image = SALE_IMAGE

	ngOnInit(): void {
		this.homeService.getSales().subscribe(res => {
			this.sales = res
		})
	}

	navigateToCategory(nameCategory: string) {
		this.router.navigate(['catalog', 'products'], {
			queryParams: {
				mainCategory: nameCategory
			}
		})
	}

	next() {

		if (this.sales.length - 1 > this.indexImage) {
			this.indexImage += 1


		} else {
			this.indexImage = 0
		}
		this.carousel!.nativeElement!.style!.left = `${-760 * this.indexImage}px`
	}

	back() {
		if (this.indexImage !== 0) {
			this.indexImage -= 1

		} else {
			this.indexImage = this.sales.length - 1
		}
		this.carousel!.nativeElement!.style!.left = `${-760 * this.indexImage}px`
	}

	getPdf(){
		this.linc?.nativeElement.click()
	}

}
