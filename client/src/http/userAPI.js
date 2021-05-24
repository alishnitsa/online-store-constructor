import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"; // Декодирование токена

// ! Иногда проблема с check в firefox

const registration = async (email, password) => {
	const { data } = await $host.post('api/user/registration', { email, password }) // Ответ сервера при регистрации
	localStorage.setItem('token', data.token) // Помещаем токен в локальное хранилище
	return jwt_decode(data.token) // Результат декодирования
}

const login = async (email, password) => {
	const { data } = await $host.post('api/user/login', { email, password }) // Ответ сервера при авторизации
	localStorage.setItem('token', data.token) // Помещаем токен в локальное хранилище
	return jwt_decode(data.token) // Результат декодирования
}

const check = async () => { // Проверка токена. Если не валидный, пользователь разлогинивается
	const { data } = await $authHost.get('api/user/auth') // Ответ сервера проверке токена
	const decode = jwt_decode(data.token)
	localStorage.setItem('token', data.token) // Помещаем токен в локальное хранилище
	localStorage.setItem('role', decode.role) // Помещаем роль в локальное хранилище
	localStorage.setItem('email', decode.email) // Помещаем роль в локальное хранилище
	// console.log(localStorage);
	return decode // Результат декодирования
}

// ! Не отправляет данные на сервер
const fetchUser = async (email) => {
	const { data } = await $authHost.get('api/user/current-user', {
		params: {
			email
		}
	})
	return data
}


export {
	registration,
	login,
	check,
	fetchUser
}