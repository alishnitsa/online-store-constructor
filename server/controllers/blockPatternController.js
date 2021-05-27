const { BlockPattern } = require('../models/models')

class BlockPatternController { // Контроллер для бренда
	async create(req, res) { // Создание
		const { name, code } = req.body // Получение тела запроса
		const blockPattern = await BlockPattern.create({ name, code }) // Создание проекта
		return res.json(blockPattern)
	}

	async getAll(req, res) { // Получение
		const blockPatterns = await BlockPattern.findAll() // Получение всех строк
		return res.json(blockPatterns)
	}
}

module.exports = new BlockPatternController() // Экспорт