import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WrapperComponent} from "./wrapper/wrapper.component";

const routes: Routes = [
	{
		path: '',
		component: WrapperComponent,
		children: [
			{
				path: '',
				redirectTo: '/home',
				pathMatch: 'full'
			},

			{
				path: 'home',
				loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
				data: {
					title: 'Главная'
				}
			},
			{
				path: 'about-us',
				loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule),
				data: {
					title: 'О нас'
				}
			},

			{
				path: 'contacts',
				loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
				data: {
					title: 'Контакты'
				}
			},
			{
				path: 'catalog',
				loadChildren: () => import('./pages/catalog/catalog.module').then(m => m.CatalogModule),
				data: {
					title: 'Каталог'
				}
			},
			{
				path: 'sales',
				loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule),
				data: {
					title: 'Акции'
				}
			},
			{
				path: 'guarantee-obligation',
				loadChildren: () => import('./pages/guarantee-obligation/guarantee-obligation.module').then(m => m.GuaranteeObligationModule),
				data: {
					title: 'Гарантийтное обязательство'
				}
			},
			{
				path: 'repair-and-service',
				loadChildren: () => import('./pages/repair-and-service/repair-and-service.module').then(m => m.RepairAndServiceModule),
				data: {
					title: 'Ремонт и сервис'
				}
			},
			{
				path: 'diplomas-and-documentation',
				loadChildren: () => import('./pages/diplomas-and-documentation/diplomas-and-documentation.module').then(m => m.DiplomasAndDocumentationModule),
				data: {
					title: 'Дипломы и техническая документация'
				}
			}

		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MainRoutingModule {

}
