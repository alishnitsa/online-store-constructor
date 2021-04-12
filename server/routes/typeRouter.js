const Router = require('express') // Подключение роутера
const typeController = require('../controllers/typeController')
const router = new Router() // Создание объекта роутер
const checkRole = require('../middleware/checkRoleMiddleware')

// Методы по работе с типами

router.post('/', checkRole('ADMIN'), typeController.create) // Создание типа (только для админа)
router.get('/', typeController.getAll) // Получение типа

module.exports = router