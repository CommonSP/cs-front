import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalesComponent} from './layout/sales.component';
import {SalesRoutingModule} from "./sales-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {SaleService} from "./services/sale.service";
import {AuthModule} from "../../../auth/auth.module";


@NgModule({
	declarations: [
		SalesComponent
	],
    imports: [
        CommonModule,
        SalesRoutingModule,
        MatIconModule,
		AuthModule,
    ],
	providers:[
		SaleService
	]
})
export class SalesModule {
}
