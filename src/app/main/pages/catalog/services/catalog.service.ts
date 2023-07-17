import {Injectable} from '@angular/core';

import {HttpClient, HttpParams} from "@angular/common/http";
import {PRODUCTS} from "../../../../config/config";
import {map, Observable} from "rxjs";
import {IProduct} from "../../../../models/product";
import {ResponseData} from "../../../../models/response-data";

@Injectable()
export class CatalogService {

	constructor(private http: HttpClient) {
	}


	getProducts(limit: number, offset: number, mainCategory: string, subCategory: string): Observable<ResponseData> {
		const params: HttpParams = new HttpParams({
			fromObject: {
				limit,
				offset,
				mainCategory,
				subCategory
			}
		})

		return this.http.get<ResponseData>(PRODUCTS, {params})
	}

	getProductByGuid(guid: string) {
		return this.http.get<IProduct>(PRODUCTS + guid )
	}
}
