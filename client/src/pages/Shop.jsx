import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrandBar } from '../components/BrandBar'
import { DeviceList } from '../components/DeviceList'
import { TypeBar } from '../components/TypeBar'

const Shop = () => { // Компонент страницы магазина

	return (
		<Container>
			{/* Строка из 12 колонок */}
			<Row className="mt-2" >
				{/* Панель с типами */}
				<Col md={3}>
					<TypeBar />
				</Col>
				{/* Для остального контента по 3 на каждый товар */}
				<Col md={9}>
					<BrandBar />
					<DeviceList />
				</Col>
			</Row>
		</Container>
	)
}

export { Shop }