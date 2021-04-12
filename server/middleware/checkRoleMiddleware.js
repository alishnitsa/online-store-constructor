const jwt = require("jsonwebtoken")

module.exports = function (role) { // Замыкание, проверка роли
	return function (req, res, next) { // Проверки авторизации
		if (req.method === "OPTIONS") {
			next()
		}
		try {
			const token = req.headers.authorization.split(' ')[1] // Токен
			if (!token) {
				return res.status(401).json({ message: "Не авторизован" })
			}
			const decoded = jwt.verify(token, process.env.SECRET_KEY) // Проверка токена на валидность
			if (decoded.role !== role) {
				return res.status(403).json({ message: "Нет доступа" })
			}
			req.user = decoded
			next()
		} catch (e) {
			res.status(401).json({ message: "Не авторизован" })
		}
	}
}