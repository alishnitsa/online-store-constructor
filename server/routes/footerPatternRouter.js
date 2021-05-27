const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const footerPatternController = require('../controllers/footerPatternController')
// const checkRole = require('../middleware/checkRoleMiddleware')

// Методы по работе с девайсами

router.post('/', footerPatternController.create) // Создание девайса
router.get('/', footerPatternController.getAll) // Получение девайса

module.exports = router