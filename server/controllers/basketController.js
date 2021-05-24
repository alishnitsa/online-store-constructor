const { Basket } = require('../models/models')
const ApiError = require('../error/ApiError')
// ! Возможно надо будет убрать

class BasketController {

	async create(req, res) {
		try {
			const { userId } = req.body
			const basket = await Basket.create({ userId })
			return res.json(basket)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getBasket(req, res) {
		const { userId } = req.query
		const basket = await Basket.findOne({
			where: { userId }
		})
		return res.json(basket)
	}


}

module.exports = new BasketController()