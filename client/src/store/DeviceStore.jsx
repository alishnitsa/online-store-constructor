import { makeAutoObservable } from "mobx"; // Для работы с состояниями

class DeviceStore { // Глобальное состояние
	constructor() {
		// Store
		// ! Временные заглушки
		this._types = [ // Типы
			{ id: 1, name: 'Холодильники' },
			{ id: 2, name: 'Смартфоны' },
			{ id: 3, name: 'Ноутбуки' },
			{ id: 4, name: 'Телевизоры' },
		]
		this._brands = [ // Бренды
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
			{ id: 3, name: 'Lenovo' },
			{ id: 4, name: 'Asus' },
		]
		this._devices = [ // Девайсы
			{ id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
			{ id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
			{ id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
			{ id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
			{ id: 5, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
			{ id: 6, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
		]
		this._selectedType = {} // Выделенное поле типа
		this._selectedBrand = {} // Выделенное поле бренда

		makeAutoObservable(this) // Следит за изменениями состояний
	}

	// Actions
	setTypes(types) { // Для изменения типа
		this._types = types
	}
	setBrands(brands) { // Для изменения бренда
		this._brands = brands
	}
	setDevices(devices) { // Для изменения девайса
		this._devices = devices
	}
	setSelectedType(type) { // Для изменения выделенного типа
		this._selectedType = type
	}
	setSelectedBrand(brand) { // Для изменения выделенного бренда
		this._selectedBrand = brand
	}

	// Геттеры
	// Вызываются если переменная внутри была изменена
	get brands() {
		return this._brands
	}
	get types() {
		return this._types
	}
	get devices() {
		return this._devices
	}
	get selectedType() {
		return this._selectedType
	}
	get selectedBrand() {
		return this._selectedBrand
	}
}

export { DeviceStore }