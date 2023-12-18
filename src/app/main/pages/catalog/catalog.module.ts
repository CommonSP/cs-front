import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from './layout/catalog.component';
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CategoriesComponent} from './components/categories/categories.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/product/product.component';
import {CatalogService} from "./services/catalog.service";
import {AuthService} from "../../../auth/services/auth.service";
import {AuthModule} from "../../../auth/auth.module";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import { MatIconModule } from '@angular/material/icon'


@NgModule({
	declarations: [
		CatalogComponent,
		CategoriesComponent,
		ProductsComponent,
		ProductComponent,
	],
	imports: [
		CatalogRoutingModule,
		CommonModule,
		AuthModule,
		MatPaginatorModule,
		MatTooltipModule,
		MatIconModule,
	],
	providers: [CatalogService, MatPaginatorIntl]
})
export class CatalogModule {
}
