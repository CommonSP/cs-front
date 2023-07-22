import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WrapperComponent} from './wrapper/wrapper.component';
import {MainRoutingModule} from "./main-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
	imports: [CommonModule, MainRoutingModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
	declarations: [
		WrapperComponent
	],
})
export class MainModule {
}
