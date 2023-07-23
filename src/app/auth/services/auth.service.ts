import { Injectable } from '@angular/core';
import {AuthModule} from "../auth.module";

@Injectable()
export class AuthService {

	private _isAuth = true
	get isAuth(): boolean{
		return localStorage.getItem('login')!==null
	}
	username: string = ''

	get isAdmin():boolean{
		return localStorage.getItem('login')=='admin12345'
	}

  constructor() { }

	login(login: string, password: string){

		localStorage.setItem('login', login)
		localStorage.setItem('password', password)
	}

	logout() {
		localStorage.removeItem('login')
		localStorage.removeItem('password')
	}
}
