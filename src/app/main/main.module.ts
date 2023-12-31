import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WrapperComponent} from './wrapper/wrapper.component';
import {MainRoutingModule} from "./main-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from '@angular/material/menu';
import {AuthService} from "../auth/services/auth.service";
import {AuthModule} from "../auth/auth.module";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
	imports: [CommonModule, MainRoutingModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatMenuModule, AuthModule, MatAutocompleteModule, ReactiveFormsModule],
	declarations: [
		WrapperComponent
	],
})
export class MainModule {
}
