
require('dotenv').config() // Подключаем конфиги для работы с переменной окружения

const express = require('express') // Подключение express
const sequelize = require('./db') // Импорт настроек для работы с БД
const models = require('./models/models') // Импорт моделей
const cors = require('cors') // Для отправки запросов с браузера
const router = require('./routes/index') // Импорт главного роутера

const PORT = process.env.PORT || 5000 // Прослушка порта из переменной окружения 

const app = express() //
app.use(cors())
app.use(express.json()) // Для парсинга json формата
app.use('/api', router) // url, router

const start = async () => { // Подключение к БД
	try {
		await sequelize.authenticate() // Подключаемся к БД
		await sequelize.sync() // Сравнение БД со схемой данных
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) // Поднимаем сервер на заданном порте
	} catch (e) {
		console.log(e)
	}
}

start()
