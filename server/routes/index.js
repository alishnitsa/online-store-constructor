const Router = require('express') // Подключение роутера

const router = new Router() // Создание объекта роутер

// TODO: Надо сделать роутеры и контроллеры для корзины и рейтинга

// Импорт роутеров
const projectRouter = require('./projectRouter'),
	userRouter = require('./userRouter'),
	headerPatternRouter = require('./headerPatternRouter'),
	blockPatternRouter = require('./blockPatternRouter'),
	footerPatternRouter = require('./footerPatternRouter')

// url, router
router.use('/user', userRouter)
router.use('/project', projectRouter)
router.use('/header-pattern', headerPatternRouter)
router.use('/block-pattern', blockPatternRouter)
router.use('/footer-pattern', footerPatternRouter)

module.exports = router