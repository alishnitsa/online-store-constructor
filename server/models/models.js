const sequelize = require('../db')
const { DataTypes } = require('sequelize') // Импорт класса, с помощью которого описываются типы полей

// Создание моделей

const User = sequelize.define('user', { // Пользователь
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	email: { type: DataTypes.STRING, unique: true }, // Почта
	password: { type: DataTypes.STRING }, // Пароль
	role: { type: DataTypes.STRING, defaultValue: "USER" } // Роль (ADMIN или USER)
})

const Basket = sequelize.define('basket', { // Корзина
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
})

const BasketDevice = sequelize.define('basket_device', { // Корзина устройств
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
})

const Device = sequelize.define('device', { // Устройство
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, unique: true, allowNull: false }, // Название
	price: { type: DataTypes.INTEGER, allowNull: false }, // Цена
	rating: { type: DataTypes.INTEGER, defaultValue: 0 }, // Рейтинг
	img: { type: DataTypes.STRING, allowNull: false }, // Картинка
})

const Type = sequelize.define('type', { // Тип
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, unique: true, allowNull: false }, // Название
})

const Brand = sequelize.define('brand', { // Бренд
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, unique: true, allowNull: false }, // Название
})

const Rating = sequelize.define('rating', { // Рейтинг
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	rate: { type: DataTypes.INTEGER, allowNull: false }, // Оценка 
})

const DeviceInfo = sequelize.define('info', { // Информация о девайсе
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	title: { type: DataTypes.STRING, allowNull: false }, // Название характеристики
	description: { type: DataTypes.STRING, allowNull: false }, // Описание характеристики
})

const TypeBrand = sequelize.define('type_brand', { // Временной таблица для связи М - М между моделями Тип и Бренд
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
})

// Связи (1 - 1, 1 - М, М - 1, М - М)

User.hasOne(Basket) // 1 - 1
Basket.belongsTo(User) // Корзина пренадлежит пользователю

User.hasMany(Rating) // 1 - M
Rating.belongsTo(User) // Рейтинг пренадлежит пользователю

Basket.hasMany(BasketDevice) // 1 - M
BasketDevice.belongsTo(Basket) // Корзина девайсов пренадлежит корзине

Type.hasMany(Device) // 1 - M
Device.belongsTo(Type) // Девайс пренадлежит типу

Brand.hasMany(Device) // 1 - M
Device.belongsTo(Brand) // девайс пренадлежит бренду

Device.hasMany(Rating) // 1 - M
Rating.belongsTo(Device) // Рейтинг пренадлежит девайсу

Device.hasMany(BasketDevice) // 1 - M
BasketDevice.belongsTo(Device) // Корзина девайсов пренадлежит девайсу

Device.hasMany(DeviceInfo, { as: 'info' }) // 1 - M
DeviceInfo.belongsTo(Device) // Информация девайса пренадлежит девайсу

Type.belongsToMany(Brand, { through: TypeBrand }) // M - M
Brand.belongsToMany(Type, { through: TypeBrand }) // Бренд пренадлежит типу

module.exports = { // Экспорт объектов
	User,
	Basket,
	BasketDevice,
	Device,
	Type,
	Brand,
	Rating,
	TypeBrand,
	DeviceInfo
}