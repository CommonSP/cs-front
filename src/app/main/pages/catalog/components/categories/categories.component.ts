import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

	constructor(private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit(): void {
	}

	navigateToCategory(nameCategory: string) {
		this.router.navigate(['products'], {
			relativeTo: this.route,
			queryParams: {
				mainCategory: nameCategory
			}
		})
	}
}
