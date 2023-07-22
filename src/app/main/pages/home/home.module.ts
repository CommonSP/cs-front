import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './layout/home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeService} from "./services/home.service";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		HomeRoutingModule,
		CommonModule,
		MatIconModule
	],
	providers: [
		HomeService
	]
})
export class HomeModule {
}
