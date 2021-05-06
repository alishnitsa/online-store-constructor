import { $authHost, $host } from "./index";

const createType = async (type) => { // Добавление типа
	const { data } = await $authHost.post('api/type', type) // Ответ сервера при добавлении типа
	return data // Результат добавления
}

const fetchTypes = async () => { // Получение типов
	const { data } = await $host.get('api/type') // Ответ сервера при получении
	return data // Результат получения
}

const createBrand = async (brand) => { // Добавление бренда
	const { data } = await $authHost.post('api/brand', brand) // Ответ сервера при добавлении типа
	return data // Результат добавления
}

const fetchBrands = async () => { // Получение брендов
	const { data } = await $host.get('api/brand')
	return data // Результат получения
}

const createProduct = async (product) => { // Добавление девайса
	const { data } = await $authHost.post('api/product', product) // Ответ сервера при добавлении типа
	return data // Результат добавления
}

const fetchProducts = async (typeId, brandId, page, limit = 5) => { // Получение девайсов
	const { data } = await $host.get('api/product', { // Ответ сервера при получении
		params: {
			typeId, brandId, page, limit
		}
	}) // Ответ сервера при получении
	return data // Результат получения
}

const fetchOneProduct = async (id) => { // Получение одного девайса
	const { data } = await $host.get('api/product/' + id) // Ответ сервера при получении
	return data // Результат получения
}

export {
	createType,
	fetchTypes,
	createBrand,
	fetchBrands,
	createProduct,
	fetchProducts,
	fetchOneProduct
}