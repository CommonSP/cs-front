import { Injectable } from '@angular/core';
import {AuthModule} from "../auth.module";

@Injectable()
export class AuthService {

	private _isAuth = true
	get isAuth(): boolean{
		return this._isAuth
	}

  constructor() { }
}
