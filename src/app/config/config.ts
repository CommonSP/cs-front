import {environment} from "../../environments/environment";

const baseUrl = environment.baseUrl

export const PRODUCTS = baseUrl + '/api/products/'
export const PRODUCT_IMAGE = baseUrl + '/api/images/product/'
export const IMAGES = baseUrl + '/api/images/'
export const SALE_IMAGE = baseUrl + '/api/imagess/sale/'
export const USER = baseUrl + '/api/user/'
export const SALES = baseUrl + '/api/sales/'
