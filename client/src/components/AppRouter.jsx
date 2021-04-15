import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

const AppRouter = () => {
	const isAuth = false // Флаг авторизации пользователя (заглушка)
	return (
		<Switch>
			{	// Для авторизованных пользователей
				isAuth &&
				authRoutes.map(({ path, Component }) => // Вытаскиваем путь и компонент для отрисовки
					<Route key={path} path={path} component={Component} exact /> // Точное совпадение пути (exact)
				)
			}
			{ // Для всех пользователей
				publicRoutes.map(({ path, Component }) => // Вытаскиваем путь и компонент для отрисовки
					<Route key={path} path={path} component={Component} exact /> // Точное совпадение пути (exact)
				)
			}
			<Redirect to={SHOP_ROUTE} /> // * В случае не совпадения переход на страницу магазина 
		</Switch>
	)
}

export { AppRouter }