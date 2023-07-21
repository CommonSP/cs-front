import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdministrationComponent} from "./layout/administration.component";
import {SettingProductsComponent} from "./components/setting-products/setting-products.component";
import {SettingSalesComponent} from "./components/setting-sales/setting-sales.component";
import {CrudProductComponent} from "./components/crud-product/crud-product.component";
import {CrudSaleComponent} from "./components/crud-sale/crud-sale.component";


const routes: Routes = [
	{
		path: '',
		component: AdministrationComponent,
		children: [
			{
				path: '',
				component: SettingProductsComponent
			},
			{
				path: 'setting-sales',
				component: SettingSalesComponent
			},
			{
				path: 'crud-product/:guid',
				component: CrudProductComponent
			},
			{
				path: 'crud-sale/:id',
				component: CrudSaleComponent
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)]
})
export class AdministrationRouterModule {
}
