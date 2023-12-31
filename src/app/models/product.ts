import {IImage} from "./image";

export interface IProduct{
	guid: string
	cat_guid?: number
	name: string
	code?: string
	articul?: string
	price?: number
	price_opt?: number
	vid_duh_leiki?: string
	verh_isl?: string
	vnut_shlang?: string
	vrash_isliva?: string
	vysota_smesitely?: string
	garanty?: string
	diamt_leiki?: string
	diamt_isliv?: string
	collection?: string
	krep_korpusa?: string
	marka_material_gaiki?: string
	material_gaiki?: string
	material_isdeliy?: string
	material_isliva?: string
	mehanism_upravleniy?: string
	nasnacheniy?: string
	opisanie?: string
	perekluchenie?: string
	standart_gp?: string
	strana?: string
	tip_isliva?: string
	tip_podklucheniy?: string
	upravlenie?: string
	kod_tnvde?: string
	ves?: number
	category?: string
	dlina_isliva?: string
	main_image?: IImage
	images: IImage[]
}
