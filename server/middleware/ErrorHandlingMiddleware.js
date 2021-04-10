const ApiError = require('../error/ApiError')

module.exports = function (err, req, res, next) {
	if (err instanceof ApiError) { // Если класс ошибки ApiError, то возвращаем клиенту сообщение со статус кодом об ошибке
		return res.status(err.status).json({ message: err.message })
	}

	return res.status(500).json({ message: "Непредвиденная ошибка!" })
}