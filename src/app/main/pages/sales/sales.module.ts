import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalesComponent} from './layout/sales.component';
import {SalesRoutingModule} from "./sales-routing.module";


@NgModule({
	declarations: [
		SalesComponent
	],
	imports: [
		CommonModule,
		SalesRoutingModule
	]
})
export class SalesModule {
}
