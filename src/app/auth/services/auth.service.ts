import { Injectable } from '@angular/core'
import { AuthModule } from '../auth.module'
import { RegistrationClient } from '../../models/registration-client'
import { HttpClient } from '@angular/common/http'
import { REGISTRATION_CLIENT } from '../../config/config'

@Injectable()
export class AuthService {

	constructor(private http: HttpClient) {
	}

	private _isAuth = true
	get isAuth(): boolean {
		return localStorage.getItem('login') !== null
	}

	username: string = ''

	get isAdmin(): boolean {
		return localStorage.getItem('login') == 'admin12345'
	}

	login(login: string, password: string) {
		if (login == 'admin12345' && password == '13244') {
			localStorage.setItem('login', login)
			localStorage.setItem('password', password)
			return true
		} else if (login == 'Optovik2000login' && password == 'ProdagiTop1') {
			localStorage.setItem('login', login)
			localStorage.setItem('password', password)
			return true
		} else {
			return false
		}
	}

	logout() {
		localStorage.removeItem('login')
		localStorage.removeItem('password')
	}

	registrationNewClient(newClient: RegistrationClient) {
		console.log(newClient)
		return this.http.post(REGISTRATION_CLIENT, newClient)
	}
}
