import { Injectable } from '@angular/core';
import {AuthModule} from "../auth.module";

@Injectable()
export class AuthService {

	constructor() { }

	private _isAuth = true
	get isAuth(): boolean{
		return localStorage.getItem('login')!==null
	}
	username: string = ''

	get isAdmin():boolean{
		return localStorage.getItem('login')=='admin12345'
	}

	login(login: string, password: string){
		if(login=='admin12345' && password=='13244'){
			localStorage.setItem('login', login)
			localStorage.setItem('password', password)
			return true
		}else if(login=='Optovik2000login' && password=='ProdagiTop1'){
			localStorage.setItem('login', login)
			localStorage.setItem('password', password)
			return true
		}else {
			return false
		}


	}

	logout() {
		localStorage.removeItem('login')
		localStorage.removeItem('password')
	}
}
