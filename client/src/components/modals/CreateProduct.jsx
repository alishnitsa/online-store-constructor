import React, { useContext, useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import { Form, Button, Dropdown, FormControl, Col, Row } from "react-bootstrap";
import { Context } from '../..';
import { fetchTypes, fetchBrands, createProduct } from '../../http/productAPI'
import { observer } from 'mobx-react-lite';

const CreateProduct = observer(({ show, onHide }) => {
	const { product } = useContext(Context) // Получение девайсов из состояния
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [file, setFile] = useState(null)
	const [info, setInfo] = useState([]) // Массив характеристик

	useEffect(() => { // Единожды при открытии модального окна подгружаются устройства
		fetchTypes()
			.then(data => product.setTypes(data)) // При удачном запросы в setTipes передаем то, что вернулось в запросе
		fetchBrands()
			.then(data => product.setBrands(data)) // При удачном запросы в setBrands передаем то, что вернулось в запросе
	}, [product])

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

	const changeInfo = (key, value, number) => {  // Изменение характеристик
		setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
	}

	const selectFile = e => { // Выбор файла
		setFile(e.target.files[0])
	}

	const addProduct = () => { // Создание девайса
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', product.selectedBrand.id)
		formData.append('typeId', product.selectedType.id)
		formData.append('info', JSON.stringify(info))
		createProduct(formData).then(data => onHide())
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
						<Dropdown.Toggle>{product.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{product.types.map(type =>
								<Dropdown.Item
									onClick={() => product.setSelectedType(type)}
									key={type.id}
								>
									{type.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{product.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{product.brands.map(brand =>
								<Dropdown.Item
									onClick={() => product.setSelectedBrand(brand)}
									key={brand.id}
								>
									{brand.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					{/* Инпуты */}
					<FormControl
						className="mt-3"
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder="Введите название устройства"
					/>
					<FormControl
						className="mt-3"
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
						placeholder="Введите стоимость устройства"
						type="number"
					/>
					<FormControl
						className="mt-3"
						onChange={selectFile}
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
										value={i.title}
										onChange={e => changeInfo('title', e.target.value, i.number)}
										placeholder={"Введите название свойства"}
									/>
								</Col>
								<Col md={4}>
									<Form.Control
										value={i.description}
										onChange={e => changeInfo('description', e.target.value, i.number)}
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
				<Button variant="outline-success" onClick={addProduct}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
})

export { CreateProduct }