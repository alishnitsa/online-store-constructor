const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt') // Для хеширования паролей
const jwt = require('jsonwebtoken') // Токен
const { User, Basket } = require('../models/models') // Модели пользователя и корзины

const generateJwt = (id, email, role) => { // Генерация токена
	return jwt.sign(
		{ id, email, role }, // Данные
		process.env.SECRET_KEY, // Секретный ключ
		{ expiresIn: '24h' } // Время жизни токена
	)
}

class UserController { // Контроллер для пользователя
	async registration(req, res, next) { // Регистрация
		const { name, login, password, role } = req.body // Получение из тела запроса email, пароль и роль
		if (!login && !password) { // Если поля логина и пароля пустые, то возвращаем ошибку
			return next(ApiError.badRequest('Некорректный email или пароль'))
		}
		if (!name) { // Если поля логина и пароля пустые, то возвращаем ошибку
			return next(ApiError.badRequest('Некорректное имя'))
		}
		const candidate = await User.findOne({ where: { login } }) // Проверка существования пользователя в системе
		if (candidate) {
			return next(ApiError.badRequest('Пользователь с таким email уже существует'))
		}
		const hashPassword = await bcrypt.hash(password, 5) // Хеширование пароля, если пользователя не существует (пароль, кол-во хеширований)
		const user = await User.create({ name, login, role, password: hashPassword }) // Создание пользователя
		const token = generateJwt(user.id, user.email, user.role) // Создание токена
		return res.json({ token })
	}

	async login(req, res, next) { // Вход
		const { login, password } = req.body // Получение email и пароля
		const user = await User.findOne({ where: { login } }) // Проверка на существования пользователя в БД
		if (!user) {
			return next(ApiError.badRequest('Пользователь не найден'))
		}
		let comparePassword = bcrypt.compareSync(password, user.password) // Сравнение введенного пароля и зашифрованного в БД
		if (!comparePassword) {
			return next(ApiError.badRequest('Указан неверный пароль'))
		}
		const token = generateJwt(user.id, user.login, user.role) // Создание токена
		return res.json({ token })
	}

	async check(req, res, next) { // Проверка
		const token = generateJwt(req.user.id, req.user.login, req.user.role)
		res.json({ token })
	}

	// ! Костыль. Принимается только через параметр
	async currentUser(req, res, next) {
		const { login } = req.query

		const userId = await User.findOne({
			where: {
				login: login || 'incorrect value'
			}
		})
		res.json({ userId })
	}
}

module.exports = new UserController() // Экспорт