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
	const { data } = await $host.get('api/brand') // Ответ сервера при получении
	return data // Результат получения
}

const createDevice = async (device) => { // Добавление девайса
	const { data } = await $authHost.post('api/device', device) // Ответ сервера при добавлении типа
	return data // Результат добавления
}

const fetchDevices = async () => { // Получение девайсов
	const { data } = await $host.get('api/device') // Ответ сервера при получении
	return data // Результат получения
}

const fetchOneDevice = async (id) => { // Получение одного девайса
	const { data } = await $host.get('api/device/' + id) // Ответ сервера при получении
	return data // Результат получения
}

export {
	createType,
	fetchTypes,
	createBrand,
	fetchBrands,
	createDevice,
	fetchDevices,
	fetchOneDevice
}