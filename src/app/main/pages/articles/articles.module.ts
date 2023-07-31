import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticlesComponent} from './layout/articles.component';
import {ArticlesRoutingModule} from "./articles-routing.module";


@NgModule({
	declarations: [
		ArticlesComponent
	],
	imports: [
		CommonModule,
		ArticlesRoutingModule
	]
})
export class ArticlesModule {
}
