const sequelize = require('../db')
const { DataTypes } = require('sequelize') // Импорт класса, с помощью которого описываются типы полей

// Создание моделей

const User = sequelize.define('user', { // Пользователь
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, allowNull: false }, // Имя
	date_of_birth: { type: DataTypes.DATEONLY, allowNull: false }, // Дата рождения
	email: { type: DataTypes.STRING, unique: true }, // Почта
	password: { type: DataTypes.STRING }, // Пароль
	role: { type: DataTypes.STRING, defaultValue: "USER" } // Роль (ADMIN или USER)
})

const Basket = sequelize.define('basket', { // Корзина
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
})

const BasketProduct = sequelize.define('basket_product', { // Корзина товаров
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
})

const Product = sequelize.define('product', { // Товар
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	name: { type: DataTypes.STRING, unique: true, allowNull: false }, // Название
	quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
	price: { type: DataTypes.INTEGER, allowNull: false }, // Цена
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

// const Rating = sequelize.define('rating', { // Рейтинг
// 	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
// 	rate: { type: DataTypes.INTEGER, allowNull: false }, // Оценка 
// })

const ProductInfo = sequelize.define('info', { // Информация о товаре
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
	title: { type: DataTypes.STRING, allowNull: false }, // Название характеристики
	description: { type: DataTypes.STRING, allowNull: false }, // Описание характеристики
})

const ProductKey = sequelize.define('key', { // Лицензионный ключ товара
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	key: { type: DataTypes.STRING, allowNull: false }
})

const TypeBrand = sequelize.define('type_brand', { // Временной таблица для связи М - М между моделями Тип и Бренд
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Id
})

// Связи (1 - 1, 1 - М, М - 1, М - М)

User.hasOne(Basket) // 1 - 1
Basket.belongsTo(User) // Корзина пренадлежит пользователю

// User.hasMany(Rating) // 1 - M
// Rating.belongsTo(User) // Рейтинг пренадлежит пользователю

Basket.hasMany(BasketProduct) // 1 - M
BasketProduct.belongsTo(Basket) // Корзина товаров пренадлежит корзине

Type.hasMany(Product) // 1 - M
Product.belongsTo(Type) // Товар пренадлежит типу

Brand.hasMany(Product) // 1 - M
Product.belongsTo(Brand) // Товар пренадлежит бренду

// Product.hasMany(Rating) // 1 - M
// Rating.belongsTo(Product) // Рейтинг пренадлежит товару

Product.hasMany(BasketProduct) // 1 - M
BasketProduct.belongsTo(Product) // Корзина товаров пренадлежит девайсу

Product.hasMany(ProductInfo, { as: 'info' }) // 1 - M
ProductInfo.belongsTo(Product) // Информация товара пренадлежит товару

Product.hasMany(ProductKey) // 1 - M
ProductKey.belongsTo(Product) // Ключ товара принадлежит товару

Type.belongsToMany(Brand, { through: TypeBrand }) // M - M
Brand.belongsToMany(Type, { through: TypeBrand }) // Бренд пренадлежит типу

module.exports = { // Экспорт объектов
	User,
	Basket,
	BasketProduct,
	Product,
	Type,
	Brand,
	TypeBrand,
	ProductInfo,
	ProductKey
}