import {Injectable} from '@angular/core';
import {IProduct} from "../../../../models/product";
import {PRODUCTS, SALE_IMAGE, SALES} from "../../../../config/config";
import {HttpClient} from "@angular/common/http";
import {ISale} from "../../../../models/sale";
import {Observable} from "rxjs";

@Injectable()
export class AdministrationService {

	constructor(private http: HttpClient) {
	}

	getProductByGuid(guid: string) {
		return this.http.get<IProduct>(PRODUCTS + guid)
	}

	searchProductByArticle(article: string) {
		return this.http.get<IProduct[]>(PRODUCTS + 'article/' + article)
	}

	updateProductByGuid(guid: string, data: IProduct) {
		return this.http.put<IProduct>(PRODUCTS + guid, {data})
	}

	getSales() {
		return this.http.get<ISale[]>(SALES)
	}

	getSaleById(id: string) {
		console.log(id)
		return this.http.get<ISale>(SALES + id)
	}

	saveSale(sale: ISale){
		const data ={
			name: sale.name,
			discount: sale.discount,
			image: sale.image,
			products: sale.products.map(product=>product.guid)

		}

		return this.http.post(SALES, {data})
	}


	updateSale(sale: ISale) {
		const data ={
			name: sale.name,
			discount: sale.discount,
			image: sale.image,
			products: sale.products.map(product=>product.guid)
		}
		return this.http.put(SALES, {data})
	}

	upload(file: File, id:string):Observable<any> {
		const formData = new FormData();
		formData.append("file", file);
		return this.http.post(SALE_IMAGE+id, formData)
	}
}
