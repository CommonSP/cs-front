import { Component, OnInit } from '@angular/core';
import {SaleService} from "../services/sale.service";
import {ISale} from "../../../../models/sale";
import {PRODUCT_IMAGE, SALE_IMAGE} from "../../../../config/config";
import {
	logExperimentalWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings";
import {AuthService} from "../../../../auth/services/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private saleService: SaleService, public authService: AuthService) { }
	sale_image =SALE_IMAGE
	sales: ISale[] = []
	product_image = PRODUCT_IMAGE

  ngOnInit(): void {
	  this.saleService.getSales().subscribe(res=>{
		  this.sales = res
	  })
  }

	expandPanel(id: string) {
	  const element = document.getElementById(id)
		if(element){
			if(element.style.height=='0px' || element.style.height=='' ){
				element.style.height ='auto'
			}else {
				element.style.height ='0'
			}
		}
	}

	openProduct(guid: string) {

	}
}
