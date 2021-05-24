const Router = require('express') // Подключение роутера
const userController = require('../controllers/userController')

const router = new Router() // Создание объекта роутер

const authMiddleware = require('../middleware/authMiddleware')

// Методы по работе с пользователями

router.post('/registration', userController.registration) // Регистрация
router.post('/login', userController.login) // Авторизация
router.get('/auth', authMiddleware, userController.check) // Проверка авторизации пользователя
router.get('/current-user', userController.currentUser) // Проверка авторизации пользователя


module.exports = router