const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')

// Методы по работе с девайсами

router.post('/', checkRole('ADMIN'), deviceController.create) // Создание девайса
router.get('/', deviceController.getAll) // Получение девайса
router.get('/:id', deviceController.getOne) // Получение отдельно взятого девайса

module.exports = router