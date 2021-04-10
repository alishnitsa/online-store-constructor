const uuid = require('uuid') // Генерация рандомных id
const path = require('path') // Для работы с путями
const { Device } = require('../models/models')
const ApiError = require('../error/ApiError')


class DeviceController { // Контроллер для пользователя
	async create(req, res, next) { // Создание
		try {
			const { name, price, brandId, typeId, info } = req.body //Получение данных из тела запроса
			const { img } = req.files // Получение изображения
			let fileName = uuid.v4() + ".jpg" // Генерация имени файла
			img.mv(path.resolve(__dirname, '..', 'static', fileName)) // Перемещение в нужную директорию

			const device = await Device.create({ name, price, brandId, typeId, img: fileName }) // Создание девайса

			return res.json(device)
		} catch (e) { // Перехват ошибок
			next(ApiError.badRequest(e.message))
		}

	}

	async getAll(req, res) { // Получение

	}

	async getOne(req, res) { // Получение одного девайса

	}


}

module.exports = new DeviceController() // Экспорт