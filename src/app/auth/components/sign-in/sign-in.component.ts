import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
	value = ''

	constructor(private authService: AuthService, private router: Router) {
	}
	authForm: FormGroup = new FormGroup({
		login: new FormControl(),
		password: new FormControl()
	})
	ngOnInit(): void {
	}

	login(){
		this.authService.login(this.authForm.get('login')?.value, this.authForm.get('password')?.value)
		this.router.navigate([''])
	}


}
