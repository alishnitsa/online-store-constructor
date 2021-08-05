import React from 'react'
import { Card, Col } from 'react-bootstrap'

const ProjectNew = () => {

	return (
		<Col
			md={12}
			className={"mt-3"}
		>
			<Card style={{
				cursor: 'pointer',
				backgroundColor: '#0202FF',
				width: '100%',
				border: '3px solid #707070'
			}}

				border={"#F0F2F3"}
			>
				<Card.Body className={"d-flex justify-content-around align-center"}>
					<Card.Title
						className={"d-inline mb-0"}
					>
						СОЗДАТЬ НОВЫЙ ПРОЕКТ
					</Card.Title>
				</Card.Body>

			</Card>
		</Col>
	)
}

export { ProjectNew }