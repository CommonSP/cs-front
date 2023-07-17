import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes = [
	{
		path: '',
		redirectTo: '/sign-in',
		pathMatch: "full"
	},
	{
		path: 'sign-in',
		component: SignInComponent,
		data: {
			title: 'Вход'
		}
	},
	{
		path: 'registration',
		component: RegistrationComponent,
		data: {
			title: 'Регистрация'
		}
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {
}
