import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Container } from "react-bootstrap";
import { NavLink, useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
	const { user } = useContext(Context) // Хук для работы с контекстом
	const history = useHistory() // хук для динамического передвижения по странице
	const role = localStorage.role === 'ADMIN'

	const logOut = () => { // Выход из аккаунта
		user.setUser({})
		user.setIsAuth(false) // Пользователь не авторизован
		localStorage.removeItem('token') // Удаляет токен при выходе
	}

	return (
		<Navbar style={{ backgroundColor: '#272222' }} >
			<Container>
				<NavLink
					to={MAIN_ROUTE}
					style={{ color: 'white', fontSize: 35 }}
				>STONKS</NavLink>

				{
					user.isAuth ? // Проверка на авторизацию
						< Nav
							className="ml-auto"
							style={{ color: 'white' }}
						>
							{
								role ? // Проверка на роль админа
									<Button
										variant={"outline-light"}
										onClick={() => history.push(ADMIN_ROUTE)} // Переход на панель админа
									>
										Админ панель
									</Button> : null

							}

							<Button
								variant={"outline-light"}
								onClick={() => logOut()} // Выход из аккаунта
								className={"ml-2"}
							>
								Выйти
							</Button>
							<Button
								variant={"outline-light"}
								onClick={() => logOut()} // Выход из аккаунта
								className={"ml-2"}
							>
								Назад
							</Button>
						</Nav>
						:
						<Nav
							className="ml-auto"
							style={{ color: 'white' }}
						>
							<Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
						</Nav>
				}
			</Container>
		</Navbar >
	)
})

export { NavBar }