const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const basketProductController = require('../controllers/basketProductController')
const checkRole = require('../middleware/checkRoleMiddleware')


// Методы по работе с корзинами

router.post('/', basketProductController.create) // Создание бренда
router.get('/', basketProductController.getAll) // Получение бренда
router.get('/:id', basketProductController.getGroup) // Получение бренда

module.exports = router