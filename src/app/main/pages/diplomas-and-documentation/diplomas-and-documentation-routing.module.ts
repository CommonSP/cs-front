import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DiplomasAndDocumentationComponent} from "./layout/diplomas-and-documentation.component";

const routes: Routes = [
	{
		path: '',
		component: DiplomasAndDocumentationComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DiplomasAndDocumentationRoutingModule {
}
