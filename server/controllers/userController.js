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
		const { name, date_of_birth, email, password, role } = req.body // Получение из тела запроса email, пароль и роль
		if (!email && !password) { // Если поля логина и пароля пустые, то возвращаем ошибку
			return next(ApiError.badRequest('Некорректный email или пароль'))
		}
		if (!name) { // Если поля логина и пароля пустые, то возвращаем ошибку
			return next(ApiError.badRequest('Некорректное имя'))
		}
		if (!date_of_birth) { // Если поля логина и пароля пустые, то возвращаем ошибку
			return next(ApiError.badRequest('Некорректная дата рождения'))
		}
		const candidate = await User.findOne({ where: { email } }) // Проверка существования пользователя в системе
		if (candidate) {
			return next(ApiError.badRequest('Пользователь с таким email уже существует'))
		}
		const hashPassword = await bcrypt.hash(password, 5) // Хеширование пароля, если пользователя не существует (пароль, кол-во хеширований)
		const user = await User.create({ name, date_of_birth, email, role, password: hashPassword }) // Создание пользователя
		const basket = await Basket.create({ userId: user.id }) // Создание корзины для пользователя
		const token = generateJwt(user.id, user.email, user.role) // Создание токена
		return res.json({ token })
	}

	async login(req, res, next) { // Вход
		const { email, password } = req.body // Получение email и пароля
		const user = await User.findOne({ where: { email } }) // Проверка на существования пользователя в БД
		if (!user) {
			return next(ApiError.badRequest('Пользователь не найден'))
		}
		let comparePassword = bcrypt.compareSync(password, user.password) // Сравнение введенного пароля и зашифрованного в БД
		if (!comparePassword) {
			return next(ApiError.badRequest('Указан неверный пароль'))
		}
		const token = generateJwt(user.id, user.email, user.role) // Создание токена
		return res.json({ token })
	}

	async check(req, res, next) { // Проверка
		const token = generateJwt(req.user.id, req.user.email, req.user.role)
		res.json({ token })
	}
}

module.exports = new UserController() // Экспорт