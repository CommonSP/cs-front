import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AgreementComponent } from './components/agreement/agreement.component';


@NgModule({
	declarations: [
		SignInComponent,
		RegistrationComponent,
  AgreementComponent
	],
	imports: [
		AuthRoutingModule,
		CommonModule,
		MatInputModule,
		MatIconModule,
		MatFormFieldModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatCheckboxModule
	],
	providers: [AuthService],
	exports: []
})
export class AuthModule {
}
