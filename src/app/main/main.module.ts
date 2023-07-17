import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WrapperComponent} from './wrapper/wrapper.component';
import {MainRoutingModule} from "./main-routing.module";

@NgModule({
	imports: [CommonModule, MainRoutingModule],
	declarations: [
		WrapperComponent
	],
})
export class MainModule {
}
