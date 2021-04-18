import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Container } from "react-bootstrap";
import { NavLink, useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';


const NavBar = observer(() => {
	const { user } = useContext(Context) // Хук для работы с контекстом
	const history = useHistory() // хук для динамического передвижения по странице
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink
					to={SHOP_ROUTE}
					style={{ color: 'white' }}
				>Купи Девайс</NavLink>
				{
					// Если пользователь авторизован, то даются права админа
					// ! Это заглушка
					user.isAuth ?
						<Nav
							className="ml-auto"
							style={{ color: 'white' }}
						>
							<Button
								variant={"outline-light"}
								onClick={() => history.push(ADMIN_ROUTE)} // Переход на панель админа
							>
								Админ панель
							</Button>
							<Button
								variant={"outline-light"}
								onClick={() => history.push(LOGIN_ROUTE)} // Переход на панель авторизации
								className={"ml-2"}
							>
								Выйти
							</Button>
						</Nav>
						:
						<Nav
							className="ml-auto"
							style={{ color: 'white' }}
						>
							<Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
						</Nav>
				}
			</Container>
		</Navbar>
	)
})

export { NavBar }