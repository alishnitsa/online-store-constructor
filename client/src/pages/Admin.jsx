import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { CreateBrand } from '../components/modals/CreateBrand'
import { CreateProduct } from '../components/modals/CreateProduct'
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
		productVisible, // Видима ли модалка
		setProductVisible // Изменение состояния видимости
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
				onClick={() => setProductVisible(true)} // Открытие модального окна
			>
				Добавить устройство
			</Button>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
			<CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
		</Container>
	)
}

export { Admin }