import React from 'react'
import { Container, Row } from 'react-bootstrap'


const MainPage = () => { // Компонент страницы магазина

	return (
		<Container>
			{/* Строка из 12 колонок */}
			<Row className="mt-2" >
				Main page
			</Row>
		</Container>
	)
}

export { MainPage }