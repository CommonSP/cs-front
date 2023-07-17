export interface ISettings {
	name: string
	alias: string
}

export const SETTINGS: Map<string, ISettings[]> = new Map([
	[
		"Для умывальника",
		[
			{name: "code", alias: "Штрихкод"},
			{name: "articul", alias: "Артикул"},
			{name: "vrash_isliva", alias: "Вращение излива"},
			{name: "vysota_smesitely", alias: "Высота смесителя"},
			{name: "garanty", alias: "Гарантия"},
			{name: "dlina_isliv", alias: "Длина излива"},
			{name: "diamt_isliv", alias: "Диаметр излива"},
			{name: "collection", alias: "Коллекция"},
			{name: "krep_korpusa", alias: "Крепление корпуса"},
			{name: "material_isdeliy", alias: "Материал изделия"},
			{name: "mehanism_upravleniy", alias: "Механизм управления смесителя"},
			{name: "nasnacheniy", alias: "Назначение"},
			{name: "standart_GP", alias: "Стандарт гибкой подводки"},
			{name: "strana", alias: "Страна"},
			{name: "tip_isliva", alias: "Тип излива"},
			{name: "tip_podklucheniy", alias: "Тип подключения к системе"},
			{name: "upravlenie", alias: "Управление"},
			{name: "kod_tnvde", alias: "ТН ВЭД код"},
			{name: "ves", alias: "Вес"},
		]
	],
	[
		"Для кухни",
		[
			{name: "code", alias: "Штрихкод"},
			{name: "articul", alias: "Артикул"},
			{name: "vrash_isliva", alias: "Вращение излива"},
			{name: "vysota_smesitely", alias: "Высота смесителя"},
			{name: "garanty", alias: "Гарантия"},
			{name: "dlina_isliv", alias: "Длина излива"},
			{name: "diamt_isliv", alias: "Диаметр излива"},
			{name: "collection", alias: "Коллекция"},
			{name: "krep_korpusa", alias: "Крепление корпуса"},
			{name: "material_isdeliy", alias: "Материал изделия"},
			{name: "mehanism_upravleniy", alias: "Механизм управления смесителя"},
			{name: "nasnacheniy", alias: "Назначение"},
			{name: "standart_GP", alias: "Стандарт гибкой подводки"},
			{name: "strana", alias: "Страна"},
			{name: "tip_isliva", alias: "Тип излива"},
			{name: "tip_podklucheniy", alias: "Тип подключения к системе"},
			{name: "upravlenie", alias: "Управление"},
			{name: "kod_tnvde", alias: "ТН ВЭД код"},
			{name: "ves", alias: "Вес"},
		]
	],
	[
		"Смесители для ванной комнаты и душевых кабин",
		[
			{name: "code", alias: "Штрихкод"},
			{name: "articul", alias: "Артикул"},
			{name: "vid_duh_leiki", alias: "Вид душевой лейки"},
			{name: "verh_isl", alias: "Вид и размер верхнего душа"},
			{name: "vrash_isliva", alias: "Вращение излива"},
			{name: "vysota_smesitely", alias: "Высота смесителя"},
			{name: "garanty", alias: "Гарантия"},
			{name: "diamt_leiki", alias: "Диаметр лейки"},
			{name: "diamt_isliv", alias: "Диаметр излива"},
			{name: "collection", alias: "Коллекция"},
			{name: "krep_korpusa", alias: "Крепление корпуса"},
			{name: "material_isdeliy", alias: "Материал изделия"},
			{name: "material_isliva", alias: "Материал излива"},
			{name: "mehanism_upravleniy", alias: "Механизм управления смесителя"},
			{name: "nasnacheniy", alias: "Назначение"},
			{name: "perekluchenie", alias: "Переключение душ излив"},
			{name: "strana", alias: "Страна"},
			{name: "tip_isliva", alias: "Тип излива"},
			{name: "tip_podklucheniy", alias: "Тип подключения к системе"},
			{name: "upravlenie", alias: "Управление"},
			{name: "kod_tnvde", alias: "ТН ВЭД код"},
			{name: "ves", alias: "Вес"},
		]
	],
	[
		"Гибкие соединения",
		[
			{name: "code", alias: "Штрихкод"},
			{name: "articul", alias: "Артикул"},
			{name: "vnut_shlang", alias: "Внутренний шланг"},
			{name: "garanty", alias: "Гарантия"},
			{name: "marka_material_gaiki", alias: "Марка материала гайки"},
			{name: "material_gaiki", alias: "Материал гайки"},
			{name: "material_isdeliy", alias: "Материал изделия"},
			{name: "mehanism_upravleniy", alias: "Механизм управления смесителя"},
			{name: "nasnacheniy", alias: "Назначение"},
			{name: "strana", alias: "Страна"},
			{name: "tip_isliva", alias: "Тип излива"},
			{name: "kod_tnvde", alias: "ТН ВЭД код"},
			{name: "ves", alias: "Вес"},
		]
	],
	[
		"Комплектация",
		[
			{name: "code", alias: "Штрихкод"},
			{name: "articul", alias: "Артикул"},
			{name: "material_isdeliy", alias: "Материал изделия"},
			{name: "nasnacheniy", alias: "Назначение"},
			{name: "strana", alias: "Страна"},
			{name: "kod_tnvde", alias: "ТН ВЭД код"},
			{name: "ves", alias: "Вес"},
		]
	],
	[
		"Шланг душевой",
		[
			{name: "code", alias: "Штрихкод"},
			{name: "articul", alias: "Артикул"},
			{name: "garanty", alias: "Гарантия"},
			{name: "marka_material_gaiki", alias: "Марка материала гайки"},
			{name: "material_gaiki", alias: "Материал гайки"},
			{name: "material_isdeliy", alias: "Материал изделия"},
			{name: "nasnacheniy", alias: "Назначение"},
			{name: "strana", alias: "Страна"},
			{name: "kod_tnvde", alias: "ТН ВЭД код"},
			{name: "ves", alias: "Вес"},
		]
	],
	[
		"Душевая стойка",
		[
			{name: "code", alias: "Штрихкод"},
			{name: "articul", alias: "Артикул"},
			{name: "vid_duh_leiki", alias: "Вид душевой лейки"},
			{name: "verh_isl", alias: "Вид и размер верхнего душа"},
			{name: "vrash_isliva", alias: "Вращение излива"},
			{name: "vysota_smesitely", alias: "Высота смесителя"},
			{name: "garanty", alias: "Гарантия"},
			{name: "diamt_leiki", alias: "Диаметр лейки"},
			{name: "diamt_isliv", alias: "Диаметр излива"},
			{name: "material_isdeliy", alias: "Материал изделия"},
			{name: "mehanism_upravleniy", alias: "Механизм управления смесителя"},
			{name: "nasnacheniy", alias: "Назначение"},
			{name: "perekluchenie", alias: "Переключение душ излив"},
			{name: "strana", alias: "Страна"},
			{name: "kod_tnvde", alias: "ТН ВЭД код"},
			{name: "ves", alias: "Вес"},
		]
	],
	[
		"Душевые системы",
		[
			{name: "code", alias: "Штрихкод"},
			{name: "articul", alias: "Артикул"},
			{name: "vid_duh_leiki", alias: "Вид душевой лейки"},
			{name: "verh_isl", alias: "Вид и размер верхнего душа"},
			{name: "vrash_isliva", alias: "Вращение излива"},
			{name: "vysota_smesitely", alias: "Высота смесителя"},
			{name: "garanty", alias: "Гарантия"},
			{name: "diamt_leiki", alias: "Диаметр лейки"},
			{name: "diamt_isliv", alias: "Диаметр излива"},
			{name: "collection", alias: "Коллекция"},
			{name: "material_isdeliy", alias: "Материал изделия"},
			{name: "material_isliva", alias: "Материал излива"},
			{name: "mehanism_upravleniy", alias: "Механизм управления смесителя"},
			{name: "nasnacheniy", alias: "Назначение"},
			{name: "perekluchenie", alias: "Переключение душ излив"},
			{name: "strana", alias: "Страна"},
			{name: "tip_isliva", alias: "Тип излива"},
			{name: "tip_podklucheniy", alias: "Тип подключения к системе"},
			{name: "upravlenie", alias: "Управление"},
			{name: "kod_tnvde", alias: "ТН ВЭД код"},
			{name: "ves", alias: "Вес"},
		]
	]
])



