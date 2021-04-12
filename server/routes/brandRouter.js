const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')


// Методы по работе с брендами

router.post('/', checkRole('ADMIN'), brandController.create) // Создание бренда
router.get('/', brandController.getAll) // Получение бренда

module.exports = router