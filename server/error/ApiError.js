class ApiError extends Error {
	constructor(status, message) { // Конструктор (статус, сообщение)
		super()
		this.status = status
		this.message = message
	}

	static badRequest(message) { // Неверный запрос
		return new ApiError(404, message)
	}

	static internal(message) { // Внутренняя ошибка сервера
		return new ApiError(500, message)
	}

	static forbidden(message) { // Нет доступа
		return new ApiError(403, message)
	}
}

module.exports = ApiError