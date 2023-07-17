import {environment} from "../../environments/environment";

const baseUrl = environment.baseUrl

export const PRODUCTS = baseUrl + '/api/products/'
export const USER = baseUrl + '/api/user/'
export const SALES = baseUrl + '/api/sales/'
