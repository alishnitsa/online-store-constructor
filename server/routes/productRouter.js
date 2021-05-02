const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const productController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')

// Методы по работе с девайсами

router.post('/', checkRole('ADMIN'), productController.create) // Создание девайса
router.get('/', productController.getAll) // Получение девайса
router.get('/:id', productController.getOne) // Получение отдельно взятого девайса

module.exports = router