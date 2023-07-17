import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CatalogComponent} from "./layout/catalog.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
	{
		path: '',
		component: CatalogComponent,
		children: [
			{
				path: '',
				component: CategoriesComponent,
			},
			{
				path: 'products',
				component: ProductsComponent,
			},

		]
	},
	{
		path: 'product/:id',
		component: ProductComponent,
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CatalogRoutingModule {

}
