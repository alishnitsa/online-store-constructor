const Router = require('express') // Подключение роутера

const router = new Router() // Создание объекта роутер

// TODO: Надо сделать роутеры и контроллеры для корзины и рейтинга

// Импорт роутеров
const productRouter = require('./productRouter'),
	userRouter = require('./userRouter'),
	brandRouter = require('./brandRouter'),
	typeRouter = require('./typeRouter'),
	basketRouter = require('./basketRouter')
basketProductRouter = require('./basketProductRouter')

// url, router
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)
router.use('/basket', basketRouter)
router.use('/basket-product', basketProductRouter)

module.exports = router