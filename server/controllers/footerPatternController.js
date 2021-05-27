const { FooterPattern } = require('../models/models')

class FooterPatternController { // Контроллер для бренда
	async create(req, res) { // Создание
		const { name, code } = req.body // Получение тела запроса
		const footerPattern = await FooterPattern.create({ name, code }) // Создание проекта
		return res.json(footerPattern)
	}

	async getAll(req, res) { // Получение
		const footerPatterns = await FooterPattern.findAll() // Получение всех строк
		return res.json(footerPatterns)
	}
}

module.exports = new FooterPatternController() // Экспорт