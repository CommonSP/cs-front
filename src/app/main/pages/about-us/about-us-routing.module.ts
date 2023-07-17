import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./layout/about-us.component";

const routes: Routes = [
	{
		path: '',
		component: AboutUsComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AboutUsRoutingModule {

}
