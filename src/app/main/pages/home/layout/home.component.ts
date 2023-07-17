import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-layout',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private router: Router) {
	}

	ngOnInit(): void {
	}

	navigateToCategory(nameCategory: string) {
		this.router.navigate(['catalog', 'products'], {
			queryParams: {
				mainCategory: nameCategory
			}
		})
	}

}
