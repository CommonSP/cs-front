import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

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
