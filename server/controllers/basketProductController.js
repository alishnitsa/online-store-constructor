const { BasketProduct } = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketProductController {

	async create(req, res, next) {
		try {
			const { basketId, productId } = req.body
			if (basketId && productId) {
				const basketProduct = await BasketProduct.create({ basketId, productId })
				return res.json(basketProduct)
			} else {
				next(ApiError.unprocessableEntity("Неверный запрос. Поля не могут быть пустыми"))
			}

		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res) {
		const basketProducts = await BasketProduct.findAll()
		return res.json(basketProducts)
	}

	async getGroup(req, res) {
		const { id } = req.params // Получение id корзины
		const groupBasketProducts = await BasketProduct.findAll( // Получение товар, соответсвующих id корзины
			{
				where: { basketId: id }, // Id нужной корзины
			},
		)
		return res.json(groupBasketProducts)
	}
}

module.exports = new BasketProductController()