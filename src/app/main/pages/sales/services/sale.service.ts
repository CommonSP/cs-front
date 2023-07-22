import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ISale} from "../../../../models/sale";
import {SALES} from "../../../../config/config";

@Injectable()
export class SaleService {

	constructor(private http: HttpClient) {
	}

	getSales() {
		return this.http.get<ISale[]>(SALES)
	}
}
