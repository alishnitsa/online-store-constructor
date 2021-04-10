const Router = require('express') // Подключение роутера
const typeController = require('../controllers/typeController')
const router = new Router() // Создание объекта роутер

// Методы по работе с типами

router.post('/', typeController.create) // Создание типа
router.get('/', typeController.getAll) // Получение типа

module.exports = router