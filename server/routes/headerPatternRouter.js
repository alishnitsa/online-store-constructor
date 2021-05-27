const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const headerPatternController = require('../controllers/headerPatternController')
// const checkRole = require('../middleware/checkRoleMiddleware')

// Методы по работе с девайсами

router.post('/', headerPatternController.create) // Создание девайса
router.get('/', headerPatternController.getAll) // Получение девайса

module.exports = router