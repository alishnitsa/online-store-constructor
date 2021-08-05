import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { PROJECTS_ROUTE } from '../utils/consts';

const ProjectItem = ({ project }) => {
	const history = useHistory() // хук для динамического передвижения по странице

	return (
		<Col
			md={12}
			className={"mt-3"}
		>
			<Card style={{
				cursor: 'pointer',
				backgroundColor: '#272222',
				width: '100%',
				border: '3px solid #707070'
			}}

				border={"#F0F2F3"}
			>
				<Card.Body className={"d-flex justify-content-around align-center"}>
					<Card.Title
						className={"d-inline mb-0"}
					>
						{project.name}
					</Card.Title>
					<Card.Text className={"d-inline"}>
						<Card.Link
							style={{ color: '#F0F2F3' }}
							onClick={() => history.push(`${PROJECTS_ROUTE}/download/${project.id}`)} // Слушатель нажатия
						>
							СКАЧАТЬ
						</Card.Link>
						<Card.Link style={{ color: '#F0F2F3' }}>
							НАСТРОЙКИ
						</Card.Link>
						<Card.Link style={{ color: '#F0F2F3' }}>
							УДАЛИТЬ
						</Card.Link>
					</Card.Text>

				</Card.Body>

			</Card>
		</Col>
	)
}

export { ProjectItem }