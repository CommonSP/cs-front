import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {FormControl} from "@angular/forms";
import {debounce, debounceTime, map, Observable, startWith, switchMap} from "rxjs";
import {AdministrationService} from "../pages/administration/services/administration.service";
import {MainService} from "../services/main.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {IProduct} from "../../models/product";
import {Route, Router} from "@angular/router";


@Component({
	selector: 'app-wrapper',
	templateUrl: './wrapper.component.html',
	styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
	value: string = ''

	constructor(public authService: AuthService, private mainService: MainService, private router: Router) {
	}


	myControl = new FormControl('');
	options: string[] = ['One', 'Two', 'Three'];
	filteredOptions: Observable<IProduct[]> | null = null;

	ngOnInit() {
		this.filteredOptions = this.myControl.valueChanges.pipe(
			startWith(''),
			debounceTime(1000),
			switchMap((value1: any) => {
				value1 = value1.toUpperCase()
				console.log(value1)
				return this.mainService.searchProductByArticle(value1).pipe(
					map(product => {
						if (product) {
							return product
						} else {
							return []
						}
					})
				)
			}),
		);
	}


	toProduct(option: IProduct) {
		this.router.navigate(['catalog','product', option.guid])
	}
}
