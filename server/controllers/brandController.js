const { Brand } = require('../models/models')

class BrandController { // Контроллер для бренда
	async create(req, res) { // Создание
		const { name } = req.body // Получение тела запроса
		const brand = await Brand.create({ name }) // Создание типа
		return res.json(brand)
	}

	async getAll(req, res) { // Получение
		const brands = await Brand.findAll() // Получение всех строк
		return res.json(brands)
	}
}

module.exports = new BrandController() // Экспорт