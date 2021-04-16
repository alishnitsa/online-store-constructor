import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Context } from '..'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

const AppRouter = () => {
	const { user } = useContext(Context) // Хук для работы с контекстом
	console.log(user); // ! Надо убрать
	return (
		<Switch>
			{	// Для авторизованных пользователей
				user.isAuth &&
				authRoutes.map(({ path, Component }) => // Вытаскиваем путь и компонент для отрисовки
					<Route key={path} path={path} component={Component} exact /> // Точное совпадение пути (exact)
				)
			}
			{ // Для всех пользователей
				publicRoutes.map(({ path, Component }) => // Вытаскиваем путь и компонент для отрисовки
					<Route key={path} path={path} component={Component} exact /> // Точное совпадение пути (exact)
				)
			}

			{/* В случае не совпадения переход на страницу магазина */}
			<Redirect to={SHOP_ROUTE} />
		</Switch>
	)
}

export { AppRouter }