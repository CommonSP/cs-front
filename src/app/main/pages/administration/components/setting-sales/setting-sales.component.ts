import {Component, OnInit} from '@angular/core';
import {ISale} from "../../../../../models/sale";
import {AdministrationService} from "../../services/administration.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-setting-sales',
	templateUrl: './setting-sales.component.html',
	styleUrls: ['./setting-sales.component.scss']
})
export class SettingSalesComponent implements OnInit {
	sales: ISale[] = []

	constructor(private administrationService: AdministrationService, private router: Router) {
	}

	ngOnInit(): void {
		this.administrationService.getSales().subscribe(res => {
			this.sales = res
		})
	}

	openSetting(id: string) {
		this.router.navigate(['administration', 'crud-sale', id])
	}

	addSale() {
		this.router.navigate(['administration', 'crud-sale', '0'])
	}
}
