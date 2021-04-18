import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { CreateBrand } from '../components/modals/CreateBrand'
import { CreateDevice } from '../components/modals/CreateDevice'
import { CreateType } from '../components/modals/CreateType'

const Admin = () => { // Компонент страницы администратора 
	const [
		brandVisible, // Видима ли модалка
		setBrandVisible // Изменение состояния видимости
	] = useState(false) // Состояние модалки бренда
	const [
		typeVisible, // Видима ли модалка
		setTypeVisible // Изменение состояния видимости
	] = useState(false) // Состояние модалки типа
	const [
		deviceVisible, // Видима ли модалка
		setDeviceVisible // Изменение состояния видимости
	] = useState(false) // Состояние модалки девайса

	return (
		<Container className="d-flex flex-column" >
			<Button
				variant={"outline-dark"}
				className="mt-4 p-2"
				onClick={() => setTypeVisible(true)} // Открытие модального окна
			>
				Добавить тип
			</Button>
			<Button
				variant={"outline-dark"}
				className="mt-4 p-2"
				onClick={() => setBrandVisible(true)} // Открытие модального окна
			>
				Добавить бренд
			</Button>
			<Button
				variant={"outline-dark"}
				className="mt-4 p-2"
				onClick={() => setDeviceVisible(true)} // Открытие модального окна
			>
				Добавить устройство
			</Button>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
			<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
		</Container>
	)
}

export { Admin }