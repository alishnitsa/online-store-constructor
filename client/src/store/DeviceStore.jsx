import { makeAutoObservable } from "mobx"; // Для работы с состояниями

class DeviceStore { // Глобальное состояние
	constructor() {
		// Store
		this._types = [] // Типы

		this._brands = [] // Бренды

		this._devices = [] // Девайсы

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