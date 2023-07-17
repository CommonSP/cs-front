import {IProduct} from "./product";

export interface ResponseData{
	items: IProduct[]
	total_count: number
}
