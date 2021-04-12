const uuid = require('uuid') // Генерация рандомных id
const path = require('path') // Для работы с путями
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')


class DeviceController { // Контроллер для пользователя
	async create(req, res, next) { // Создание
		try {
			let { name, price, brandId, typeId, info } = req.body //Получение данных из тела запроса
			const { img } = req.files // Получение изображения
			let fileName = uuid.v4() + ".jpg" // Генерация имени файла
			img.mv(path.resolve(__dirname, '..', 'static', fileName)) // Перемещение в нужную директорию

			const device = await Device.create({ name, price, brandId, typeId, img: fileName }) // Создание девайса

			if (info) {
				info = JSON.parse(info) // Парсим в json формат для фронта
				info.forEach(i =>  // Для бэка обратно перегоняем в объект
					DeviceInfo.create({
						title: i.title, // Название
						description: i.description, // Описание
						deviceId: device.id // Id девайса
					})
				);
			}

			return res.json(device)
		} catch (e) { // Перехват ошибок
			next(ApiError.badRequest(e.message))
		}

	}

	async getAll(req, res) { // Получение всех девайсов
		let { brandId, typeId, limit, page } = req.query // Принимаем id бренда и типа
		page = page || 1 // Страниц
		limit = limit || 9 // Лимит на одной странице
		let offset = page * limit - limit // Отступ
		let devices
		if (!brandId && !typeId) { // Если нет брендой и девайсов, то возвращаем все девайсы
			devices = await Device.findAndCountAll({ limit, offset }) // Запрос к БД
		}
		if (brandId && !typeId) { // Фильтрация по бренду
			devices = await Device.finfindAndCountAlldAll({ where: { brandId }, limit, offset }) // Запрос к БД
		}
		if (!brandId && typeId) { // Фильтрация по типу
			devices = await Device.findAndCountAll({ where: { typeId }, limit, offset }) // Запрос к БД
		}
		if (brandId && typeId) { // Фильтрация по бренду и типу
			devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset }) // Запрос к БД
		}
		return res.json(devices) // Возвращаем массив девайсов
	}

	async getOne(req, res) { // Получение одного девайса
		const { id } = req.params // Получение id девайса из параметров
		console.log(id)
		const device = await Device.findOne( // Получение одного девайса
			{
				where: { id }, // Id нужного девайса
				include: [{ model: DeviceInfo, as: 'info' }] // Массив характеристик (модель и название подгружаемого поля поля)
			},
		)
		return res.json(device)
	}


}

module.exports = new DeviceController() // Экспорт