const Router = require('express') // Подключение роутера

const router = new Router() // Создание объекта роутер

// TODO: Надо сделать роутеры и контроллеры для корзины и рейтинга

// Импорт роутеров
const productRouter = require('./productRouter'),
	userRouter = require('./userRouter'),
	brandRouter = require('./brandRouter'),
	typeRouter = require('./typeRouter')

// url, router
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)


module.exports = router