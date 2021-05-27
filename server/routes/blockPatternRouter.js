const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const blockPatternController = require('../controllers/blockPatternController')
// const checkRole = require('../middleware/checkRoleMiddleware')

// Методы по работе с девайсами

router.post('/', blockPatternController.create) // Создание девайса
router.get('/', blockPatternController.getAll) // Получение девайса

module.exports = router