import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepairAndServiceComponent} from './layout/repair-and-service.component';
import {RepairAndServiceRoutingModule} from "./repair-and-service-routing.module";


@NgModule({
	declarations: [
		RepairAndServiceComponent
	],
	imports: [
		CommonModule,
		RepairAndServiceRoutingModule
	]
})
export class RepairAndServiceModule {
}
