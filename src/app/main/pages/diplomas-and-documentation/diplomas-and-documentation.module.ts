import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiplomasAndDocumentationComponent} from './layout/diplomas-and-documentation.component';
import {DiplomasAndDocumentationRoutingModule} from "./diplomas-and-documentation-routing.module";


@NgModule({
	declarations: [
		DiplomasAndDocumentationComponent
	],
	imports: [
		CommonModule,
		DiplomasAndDocumentationRoutingModule
	]
})
export class DiplomasAndDocumentationModule {
}
