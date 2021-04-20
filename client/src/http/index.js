import axios from "axios";

const $host = axios.create({ // Для запросов не требующих авторизации
	baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({ // Для запросов с авторизацией
	baseURL: process.env.REACT_APP_API_URL

})

const authInterceptor = config => { //  Автоматически подставляет токен к каждому запросу
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
	return config
}

$authHost.interceptors.request.use(authInterceptor) // Подставляет интерцептор к запросу

export {
	$host,
	$authHost
}