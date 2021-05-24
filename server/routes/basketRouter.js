const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')


// Методы по работе с корзинами
// ! Возможно надо будет убрать
router.post('/', basketController.create) // Создание бренда
router.get('/', basketController.getBasket) // Получение бренда

module.exports = router