const generator = require('../generator/generator')
const { Project, HeaderPattern, BlockPattern, FooterPattern } = require('../models/models')

class ProjectController { // Контроллер для бренда
	async create(req, res) { // Создание проекта
		const { name, userId, headerPatternId, blockPatternId, footerPatternId } = req.body // Получение тела запроса
		const project = await Project.create({ name, userId, headerPatternId, blockPatternId, footerPatternId }) // Создание проекта
		return res.json(project)
	}

	async getAll(req, res) {
		const { userId } = req.query
		const projects = await Project.findAll({
			where: {
				userId
			}
		}) // Получение всех строк в моделе проекта
		return res.json(projects)
	}

	async generate(req, res) {
		const { projectId, userId } = req.body
		const project = await Project.findOne({
			where: {
				userId,
				id: projectId
			}
		}) // Получение всех строк в моделе проекта

		const header = await HeaderPattern.findOne({
			where: {
				id: project.headerPatternId
			}
		}) // Получение всех строк в моделе паттерна шапки

		const block = await BlockPattern.findOne({
			where: {
				id: project.blockPatternId
			}
		}) // Получение всех строк в моделе паттерна блок

		const footer = await FooterPattern.findOne({
			where: {
				id: project.footerPatternId
			}
		}) // Получение всех строк в моделе паттерна подвал

		const inputPaths = [header.code, block.code, footer.code] // Пути шаблонов

		generator(inputPaths, 'E:\\testNode\\output') // Вызов функции для копирования файлов

		return res.json()
	}
}

module.exports = new ProjectController() // Экспорт