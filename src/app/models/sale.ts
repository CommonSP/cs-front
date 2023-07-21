import {IProduct} from "./product";

export interface ISale {
	id: string
	name: string
	image: string
	discount: number
	products: IProduct[]
}
