import { makeAutoObservable } from "mobx"; // Для работы с состояниями

class DeviceStore { // Глобальное состояние
	constructor() {
		// States
		// ! Временные заглушки
		this._types = [ // Типы
			{ id: 1, name: 'Холодильники' },
			{ id: 2, name: 'Смартфоны' },
		]
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
		]
		this._devices = [
			{ id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
			{ id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
			{ id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
			{ id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` },
		]
		makeAutoObservable(this) // Следит за изменениями состояний
	}

	// Actions
	setTypes(types) { // Для изменения состояния авторизации
		this._types = types
	}
	setBrands(_brands) { // Для изменения пользователя
		this._brands = brands
	}
	setDevices(_devices) {
		this._devices = devices
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
}

export { DeviceStore }