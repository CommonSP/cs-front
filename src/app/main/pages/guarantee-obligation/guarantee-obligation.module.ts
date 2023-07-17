import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuaranteeObligationComponent} from './layout/guarantee-obligation.component';
import {GuaranteeObligationRoutingModule} from "./guarantee-obligation-routing.module";


@NgModule({
	declarations: [
		GuaranteeObligationComponent
	],
	imports: [
		GuaranteeObligationRoutingModule,
		CommonModule
	]
})
export class GuaranteeObligationModule {
}
