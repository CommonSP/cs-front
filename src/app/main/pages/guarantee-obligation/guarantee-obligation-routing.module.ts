import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GuaranteeObligationComponent} from "./layout/guarantee-obligation.component";

const routes: Routes = [
	{
		path: '',
		component: GuaranteeObligationComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GuaranteeObligationRoutingModule {
}
