const Router = require('express') // Подключение роутера
const router = new Router() // Создание объекта роутер
const projectController = require('../controllers/projectController')
// const checkRole = require('../middleware/checkRoleMiddleware')

// Методы по работе с девайсами

// ! Добавить к созданию и получению проекта проверку на роль

router.post('/', projectController.create) // Создание проекта
router.get('/', projectController.getAll) // Получение проекта
router.get('/download', projectController.generate) // Получение проекта

module.exports = router