import { makeAutoObservable } from "mobx"; // Для работы с состояниями

class HeaderPatternStore { // Глобальное состояние
	constructor() {
		// Store
		this._selectedHeader = {}
		makeAutoObservable(this) // Следит за изменениями состояний
	}

	// Actions

	setSelectedHeader(header) {
		this._selectedHeader = header
	}

	// Геттеры
	// Вызываются если переменная внутри была изменена

	get selectedHeader() {
		return this._selectedHeader
	}
}

export { HeaderPatternStore }