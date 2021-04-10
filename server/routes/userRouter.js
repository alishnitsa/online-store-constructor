const Router = require('express') // Подключение роутера

const userController = require('../controllers/userController')

const router = new Router() // Создание объекта роутер

// Методы по работе с пользователями

router.post('/registration', userController.registration) // Регистрация
router.post('/login', userController.login) // Авторизация
router.get('/auth', userController.check) // Проверка авторизации пользователя

module.exports = router