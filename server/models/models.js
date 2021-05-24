const sequelize = require('../db')
const { DataTypes } = require('sequelize') // Импорт класса, с помощью которого описываются типы полей

// Создание моделей

const User = sequelize.define('user', { // Пользователь
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, allowNull: false }, // Имя
	login: { type: DataTypes.STRING, unique: true }, // Логин (почта)
	password: { type: DataTypes.STRING }, // Пароль
	role: { type: DataTypes.STRING, defaultValue: "USER" } // Роль (ADMIN или USER)
})

const Project = sequelize.define('project', { // Проект
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, allowNull: false }, // Наименование
})

const HeaderPattern = sequelize.define('header_pattern', { // Шапка
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, allowNull: false }, // Имя
	code: { type: DataTypes.STRING, defaultValue: "" } // Код (или файл)
})

const BlockPattern = sequelize.define('block_pattern', { // Блок
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, allowNull: false }, // Имя
	code: { type: DataTypes.STRING, defaultValue: "" } // Код (или файл)
})

const FooterPattern = sequelize.define('footer_pattern', { // Подвал
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, allowNull: false }, // Имя
	code: { type: DataTypes.STRING, defaultValue: "" } // Код (или файл)
})

// Связи (1 - 1, 1 - М, М - 1, М - М)

User.hasMany(Project) // 1 - M
Project.belongsTo(User) // Проект пренадлежит пользователю

Project.hasOne(HeaderPattern) // 1 - 1
HeaderPattern.belongsTo(Project) // Шапка пренадлежит проекту

Project.hasMany(BlockPattern) // 1 - M
BlockPattern.belongsTo(Project) // Блок пренадлежит проекту

Project.hasOne(FooterPattern) // 1 - 1
FooterPattern.belongsTo(Project) // Подвал пренадлежит проекту

module.exports = { // Экспорт объектов
	User,
	Project,
	HeaderPattern,
	BlockPattern,
	FooterPattern
}