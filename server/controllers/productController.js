const uuid = require('uuid') // Генерация рандомных id
const path = require('path') // Для работы с путями
const { Product, ProductInfo } = require('../models/models')
const ApiError = require('../error/ApiError')


class ProductController { // Контроллер для для товара
	async create(req, res, next) { // Создание
		try {
			let { name, price, brandId, typeId, info } = req.body //Получение данных из тела запроса
			const { img } = req.files // Получение изображения
			let fileName = uuid.v4() + ".jpg" // Генерация имени файла
			img.mv(path.resolve(__dirname, '..', 'static', fileName)) // Перемещение в нужную директорию

			const product = await Product.create({ name, price, brandId, typeId, img: fileName }) // Создание товара

			if (info) {
				info = JSON.parse(info) // Парсим в json формат для фронта
				info.forEach(i =>  // Для бэка обратно перегоняем в объект
					ProductInfo.create({
						title: i.title, // Название
						description: i.description, // Описание
						productId: product.id // Id товара
					})
				);
			}

			return res.json(product)
		} catch (e) { // Перехват ошибок
			next(ApiError.badRequest(e.message))
		}

	}

	async getAll(req, res) { // Получение всех товаров
		let { brandId, typeId, limit, page } = req.query // Принимаем id бренда и типа
		page = page || 1 // Страниц
		limit = limit || 9 // Лимит на одной странице
		let offset = page * limit - limit // Отступ
		let products
		if (!brandId && !typeId) { // Если нет брендов и типов, то возвращаем все товары
			products = await Product.findAndCountAll({ limit, offset }) // Запрос к БД
		}
		if (brandId && !typeId) { // Фильтрация по бренду
			products = await Product.finfindAndCountAlldAll({ where: { brandId }, limit, offset }) // Запрос к БД
		}
		if (!brandId && typeId) { // Фильтрация по типу
			products = await Product.findAndCountAll({ where: { typeId }, limit, offset }) // Запрос к БД
		}
		if (brandId && typeId) { // Фильтрация по бренду и типу
			products = await Product.findAndCountAll({ where: { typeId, brandId }, limit, offset }) // Запрос к БД
		}
		return res.json(products) // Возвращаем массив товаров
	}

	async getOne(req, res) { // Получение одного товара
		const { id } = req.params // Получение id товара из параметров
		console.log(id)
		const product = await Product.findOne( // Получение одного товара
			{
				where: { id }, // Id нужного товара
				include: [{ model: ProductInfo, as: 'info' }] // Массив характеристик (модель и название подгружаемого поля)
			},
		)
		return res.json(product)
	}


}

module.exports = new ProductController() // Экспорт