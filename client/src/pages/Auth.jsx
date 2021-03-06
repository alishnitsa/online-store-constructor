import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { login } from "../http/userAPI";
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => { // Компонент страницы регистрации и авторизации
	const { user } = useContext(Context) // Получение состояние пользователей
	const history = useHistory()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const click = async () => {
		try {
			// eslint-disable-next-line
			const data = await login(email, password)
			user.setUser(user) // Изменение состояния пользователя
			user.setIsAuth(true) // Изменение состояние авторизации
			history.push(MAIN_ROUTE)
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 700, minHeight: 350, backgroundColor: '#242020', borderRadius: 50, boxShadow: '0 0 50px #0202FF' }} className="p-5" >
				<h2
					className="text-center"
				>АВТОРИЗАЦИЯ</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						style={{ height: '45px', backgroundColor: '#242020', color: '#F0F2F3', border: '3px solid #0202FF', borderRadius: 15 }}
						className="mt-3"
						placeholder="ВВЕДИТЕ ЛОГИН"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Form.Control
						style={{ height: '45px', backgroundColor: '#242020', color: '#F0F2F3', border: '3px solid #0202FF', borderRadius: 15 }}
						className="mt-3"
						placeholder="ВВЕДИТЕ ПАРОЛЬ"
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
					/>
					<Row className="d-flex justify-content-around mt-3 ml-0 mr-0">
						<Button
							className="mb-3"
							style={{ backgroundColor: '#0202FF', height: '60px', width: '200px' }}
							variant={"primary"}
							onClick={click}
						>
							ВОЙТИ_
						</Button>
						<Button
							className="mb-3 pt-3"
							style={{ backgroundColor: '#FF0000', height: '60px', width: '200px' }}
							variant={"danger"}
							href={REGISTRATION_ROUTE}
						>
							РЕГИСТРАЦИЯ_
						</Button>
					</Row>
				</Form>
			</Card>
		</Container >
	)
})

export { Auth }