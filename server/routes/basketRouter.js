const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')


// Методы по работе с корзинами

router.post('/', basketController.create) // Создание бренда
router.get('/', basketController.getAll) // Получение бренда

module.exports = router