const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const deviceController = require('../controllers/deviceController')

// Методы по работе с девайсами

router.post('/', deviceController.create) // Создание девайса
router.get('/', deviceController.getAll) // Получение девайса
router.get('/:id', deviceController.getOne) // Получение отдельно взятого девайса

module.exports = router