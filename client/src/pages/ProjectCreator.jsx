import React, { useContext, useState, useEffect } from 'react'
import { Form, Button, Dropdown, FormControl, Row, Container } from "react-bootstrap";
import { Context } from '..';
import { fetchHeaderPattern, fetchBlockPattern, fetchFooterPattern, fetchProjects } from '../http/projectAPI'
import { observer } from 'mobx-react-lite';

const ProjectCreator = observer(() => {
	const { project } = useContext(Context) // Получение девайсов из состояния
	const { headerPattern } = useContext(Context) // Получение девайсов из состояния
	const { blockPattern } = useContext(Context) // Получение девайсов из состояния
	const { footerPattern } = useContext(Context) // Получение девайсов из состояния

	const [name, setName] = useState('')

	useEffect(() => { // Единожды при открытии модального окна подгружаются устройства
		fetchProjects(2)
			.then(data => project.setProject(data)) // При удачном запросы в setProject передаем то, что вернулось в запросе
		fetchHeaderPattern()
			.then(data => headerPattern.setSelectedHeader(data)) // При удачном запросы в setProject передаем то, что вернулось в запросе
		fetchBlockPattern()
			.then(data => blockPattern.setSelectedBlock(data)) // При удачном запросы в setProject передаем то, что вернулось в запросе
		fetchFooterPattern()
			.then(data => footerPattern.setSelectedFooter(data)) // При удачном запросы в setProject передаем то, что вернулось в запросе
	}, [project, headerPattern, blockPattern, footerPattern])

	useEffect(() => {

	})

	console.log(headerPattern);
	const addProduct = () => { // Создание девайса
		const formData = new FormData()
		formData.append('name', name)
		formData.append('brandId', project.selectedBrand.id)
		formData.append('typeId', project.selectedType.id)
		// createProduct(formData)
	}

	return (
		<Container>
			<Row>
				<h2>
					Добавить устройство
       		</h2>
			</Row>
			<Row>
				<Form>
					{/* Выпадающее меню */}
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{headerPattern.selectedHeader.name || 'Выберите шапку'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{Object.values(headerPattern.selectedHeader).map(elem =>
								<Dropdown.Item
									onClick={() => headerPattern.setSelectedHeader(elem)}
									key={elem.id}
								>
									{console.log(elem)}
									{elem.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{blockPattern.selectedBlock.name || 'Выберите блок'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{Object.values(blockPattern.selectedBlock).map(elem =>
								<Dropdown.Item
									onClick={() => blockPattern.setSelectedBlock(elem)}
									key={elem.id}
								>
									{elem.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{footerPattern.selectedFooter.name || 'Выберите подвал'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{Object.values(footerPattern.selectedFooter).map(elem =>
								<Dropdown.Item
									onClick={() => footerPattern.setSelectedFooter(elem)}
									key={elem.id}
								>
									{elem.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					{/* Инпуты */}
					<FormControl
						className="mt-3"
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder="Введите название проекта"
					/>
				</Form>
			</Row>
			<Row>
				<Button variant="outline-success" onClick={addProduct}>Добавить</Button>
			</Row>
		</Container>
	)
})

export { ProjectCreator }