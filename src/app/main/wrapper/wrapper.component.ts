import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";


@Component({
	selector: 'app-wrapper',
	templateUrl: './wrapper.component.html',
	styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
	value: string = ''

	constructor(public authService: AuthService) {
	}

	ngOnInit(): void {
	}

}
