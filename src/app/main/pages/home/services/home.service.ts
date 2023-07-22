import { Injectable } from '@angular/core';
import {HomeModule} from "../home.module";
import {ISale} from "../../../../models/sale";
import {SALES} from "../../../../config/config";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HomeService {

  constructor(private http:HttpClient) { }

	getSales() {
		return this.http.get<ISale[]>(SALES)
	}
}
