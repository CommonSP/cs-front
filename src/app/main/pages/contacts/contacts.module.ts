import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from './layout/contacts.component';
import {ContactsRoutingModule} from "./contacts-routing.module";


@NgModule({
	declarations: [
		ContactsComponent
	],
	imports: [
		ContactsRoutingModule,
		CommonModule
	]
})
export class ContactsModule {
}
