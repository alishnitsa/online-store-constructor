import { makeAutoObservable } from "mobx"; // Для работы с состояниями

class ProductStore { // Глобальное состояние
	constructor() {
		// Store
		this._types = [] // Типы

		this._brands = [] // Бренды

		this._products = [] // Девайсы

		this._selectedType = {} // Выделенное поле типа
		this._selectedBrand = {} // Выделенное поле бренда

		this._page = 1 // Текущая страница
		this._totalCount = 0 // Общее кол-во товаров по данному запросу
		this._limit = 12 // Кол-во товаров на одной странице

		makeAutoObservable(this) // Следит за изменениями состояний
	}

	// Actions
	setTypes(types) { // Для изменения типа
		this._types = types
	}
	setBrands(brands) { // Для изменения бренда
		this._brands = brands
	}
	setProducts(products) { // Для изменения девайса
		this._products = products
	}
	setSelectedType(type) { // Для изменения выделенного типа
		this.setPage(1) // Перемещение на 1 страницу
		this._selectedType = type
	}
	setSelectedBrand(brand) { // Для изменения выделенного бренда
		this.setPage(1) // Перемещение на 1 страницу
		this._selectedBrand = brand
	}

	setPage(page) { // Для изменения текущей страницы
		this._page = page
	}

	setTotalCount(count) { // Для изменения общего кол-ва товаров
		this._totalCount = count
	}

	// Геттеры
	// Вызываются если переменная внутри была изменена
	get brands() {
		return this._brands
	}
	get types() {
		return this._types
	}
	get products() {
		return this._products
	}
	get selectedType() {
		return this._selectedType
	}
	get selectedBrand() {
		return this._selectedBrand
	}

	get page() {
		return this._page
	}

	get totalCount() {
		return this._totalCount
	}

	get limit() {
		return this._limit
	}

}

export { ProductStore }