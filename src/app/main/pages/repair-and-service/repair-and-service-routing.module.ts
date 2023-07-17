import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RepairAndServiceComponent} from "./layout/repair-and-service.component";

const routes: Routes = [
	{
		path: '',
		component: RepairAndServiceComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RepairAndServiceRoutingModule {
}
