import { makeAutoObservable } from "mobx"; // Для работы с состояниями

class BlockPatternStore { // Глобальное состояние
	constructor() {
		// Store
		this._selectedBlock = {}
		makeAutoObservable(this) // Следит за изменениями состояний
	}

	// Actions

	setSelectedBlock(block) {
		this._selectedBlock = block
	}

	// Геттеры
	// Вызываются если переменная внутри была изменена

	get selectedBlock() {
		return this._selectedBlock
	}
}

export { BlockPatternStore }