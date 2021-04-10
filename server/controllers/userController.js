class UserController { // Контроллер для пользователя
	async registration(req, res) { // Регистрация

	}

	async login(req, res) { // Вход

	}

	async check(req, res) { // Проверка
		const query = req.query
		res.json(query)
	}
}

module.exports = new UserController() // Экспорт