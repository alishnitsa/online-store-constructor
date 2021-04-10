const { Type } = require('../models/models') // Модель типа
const ApiError = require('../error/ApiError') // Обработка ошибок

class TypeController { // Контроллер для пользователя
	async create(req, res) { // Создание
		const { name } = req.body // Получение тела запроса
		const type = await Type.create({ name }) // Создание типа
		return res.json(type)
	}

	async getAll(req, res) { // Получение
		const types = await Type.findAll() //Получение всех строк
		return res.json(types)
	}

}

module.exports = new TypeController() // Экспорт