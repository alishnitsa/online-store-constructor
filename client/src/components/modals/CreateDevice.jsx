import React, { useContext, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { Form, Button, Dropdown, FormControl, Col, Row } from "react-bootstrap";
import { Context } from '../..';

const CreateDevice = ({ show, onHide }) => {
	const { device } = useContext(Context) // Получение девайсов из состояния
	const [info, setInfo] = useState([]) // Массив характеристик

	const addInfo = () => { // Функция добавления характеристик
		setInfo([ // Функция изменения состояния
			...info, // Разворачиваем старый массив с информацией
			{
				title: '', // Заголовок
				description: '', // Описание 
				number: Date.now() // Текущее время, чтобы использовать как id
			}
		])
	}
	const removeInfo = (number) => { // Функция удаления характеристик
		setInfo(info.filter(i => i.number !== number)) // Сравнение совпадения номера элемента с номером параметра
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить устройство
       		</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					{/* Выпадающее меню */}
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type =>
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand =>
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					{/* Инпут */}
					<FormControl
						className="mt-3"
						placeholder="Введите название устройства"
					/>
					<FormControl
						className="mt-3"
						placeholder="Введите стоимость устройства"
						type="number"
					/>
					<FormControl
						className="mt-3"
						type="file"
					/>
					<hr />
					<Button
						variant={"outline-dark"}
						onClick={addInfo}
					>
						Добавить новое свойство
					</Button>
					{
						info.map(i =>
							<Row className="mt-4" key={i.number} >
								<Col md={4}>
									<Form.Control
										placeholder={"Введите название свойства"}
									/>
								</Col>
								<Col md={4}>
									<Form.Control
										placeholder={"Введите описание свойства"}
									/>
								</Col>
								<Col md={4}>
									<Button
										variant={"outline-danger"}
										onClick={() => removeInfo(i.number)}
									>
										Удалить
									</Button>
								</Col>
							</Row>
						)
					}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={onHide}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
}

export { CreateDevice }