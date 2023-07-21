import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AdministrationRouterModule} from "./administration-router.module";
import {AdministrationComponent} from "./layout/administration.component";
import {AdministrationService} from "./services/administration.service";
import {CrudProductComponent} from "./components/crud-product/crud-product.component";
import {CrudSaleComponent} from "./components/crud-sale/crud-sale.component";
import {SettingProductsComponent} from "./components/setting-products/setting-products.component";
import {SettingSalesComponent} from "./components/setting-sales/setting-sales.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {AddProductModalComponent} from "./components/add-product-modal/add-product-modal.component";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
	declarations: [
		AdministrationComponent,
		CrudProductComponent,
		CrudSaleComponent,
		SettingProductsComponent,
		SettingSalesComponent,
		AddProductModalComponent
	],
	imports: [
		AdministrationRouterModule,
		CommonModule,
		RouterOutlet,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		FormsModule,
		MatTooltipModule,
		RouterLink,
		ReactiveFormsModule,
		MatDialogModule,
		NgOptimizedImage

	],
	providers: [AdministrationService]
})
export class AdministrationModule {
}
