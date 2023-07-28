import { Injectable } from '@angular/core';
import {IProduct} from "../../models/product";
import {PRODUCTS} from "../../config/config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

	searchProductByArticle(article: string) {
		return this.http.get<IProduct[]>(PRODUCTS + 'article/' + article)
	}
}
