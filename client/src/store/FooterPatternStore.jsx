import { makeAutoObservable } from "mobx"; // Для работы с состояниями

class FooterPatternStore { // Глобальное состояние
	constructor() {
		// Store
		this._selectedFooter = {}
		makeAutoObservable(this) // Следит за изменениями состояний
	}

	// Actions

	setSelectedFooter(footer) {
		this._selectedFooter = footer
	}

	// Геттеры
	// Вызываются если переменная внутри была изменена

	get selectedFooter() {
		return this._selectedFooter
	}
}

export { FooterPatternStore }