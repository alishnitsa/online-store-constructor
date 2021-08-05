import { makeAutoObservable } from "mobx"; // Для работы с состояниями

class ProjectStore { // Глобальное состояние
	constructor() {
		// Store
		this._projects = {}

		this._selectedHeader = {}
		this._selectedBlock = {}
		this._selectedFooter = {}

		makeAutoObservable(this) // Следит за изменениями состояний
	}

	// Actions
	setProject(projects) {
		this._projects = projects
	}

	setSelectedHeader(header) {
		this._selectedHeader = header
	}
	setSelectedBlock(block) {
		this._selectedBlock = block
	}
	setSelectedFooter(footer) {
		this._selectedFooter = footer
	}

	// Геттеры
	// Вызываются если переменная внутри была изменена
	get projects() {
		return this._projects
	}
	get selectedHeader() {
		return this._selectedHeader
	}
	get selectedBlock() {
		return this._selectedBlock
	}
	get selectedFooter() {
		return this._selectedFooter
	}
}

export { ProjectStore }