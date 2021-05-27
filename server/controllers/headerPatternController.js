const { HeaderPattern } = require('../models/models')

class HeaderPatternController { // Контроллер для бренда
	async create(req, res) { // Создание
		const { name, code } = req.body // Получение тела запроса
		const headerPattern = await HeaderPattern.create({ name, code }) // Создание проекта
		return res.json(headerPattern)
	}

	async getAll(req, res) { // Получение
		const headerPatterns = await HeaderPattern.findAll() // Получение всех строк
		return res.json(headerPatterns)
	}
}

module.exports = new HeaderPatternController() // Экспорт