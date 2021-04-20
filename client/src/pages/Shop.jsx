import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import { BrandBar } from '../components/BrandBar'
import { DeviceList } from '../components/DeviceList'
import { Pages } from '../components/Pages'
import { TypeBar } from '../components/TypeBar'
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI'

const Shop = observer(() => { // Компонент страницы магазина
	const { device } = useContext(Context) // Получение store девайсов

	useEffect(() => { // Единожды при открытии Shop подгружаются устройства
		fetchTypes()
			.then(data => device.setTypes(data)) // При удачном запросы в setTipes передаем то, что вернулось в запросе
		fetchBrands()
			.then(data => device.setBrands(data)) // При удачном запросы в setBrands передаем то, что вернулось в запросе
		fetchDevices(null, null, 1, 3)
			.then(data => {
				device.setDevices(data.rows) // При удачном запросы в setDevices передаем то, что вернулось в запросе
				device.setTotalCount(data.count) // Кол-во товаров по запросу
			})
	})

	useEffect(() => {
		fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2)
			.then(data => {
				device.setDevices(data.rows) // При удачном запросы в setDevices передаем то, что вернулось в запросе
				device.setTotalCount(data.count) // Кол-во товаров по запросу
			})
		// eslint-disable-next-line
	}, [device.page, device.selectedType, device.selectedBrand])

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
					<Pages />
				</Col>
			</Row>
		</Container>
	)
})

export { Shop }