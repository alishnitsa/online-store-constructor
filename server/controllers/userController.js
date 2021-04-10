const ApiError = require('../error/ApiError')

class UserController { // Контроллер для пользователя
	async registration(req, res) { // Регистрация

	}

	async login(req, res) { // Вход

	}

	async check(req, res, next) { // Проверка
		const { id } = req.query
		if (!id) {
			return next(ApiError.badRequest('Не задан Id'))
		}
		res.json(id)
	}
}

module.exports = new UserController() // Экспорт