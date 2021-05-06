import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import { BrandBar } from '../components/BrandBar'
import { ProductList } from '../components/ProductList'
import { Pages } from '../components/Pages'
import { TypeBar } from '../components/TypeBar'
import { fetchTypes, fetchBrands, fetchProducts } from '../http/productAPI'

const Shop = observer(() => { // Компонент страницы магазина
	const { product } = useContext(Context) // Получение store девайсов

	useEffect(() => { // Единожды при открытии Shop подгружаются устройства
		fetchTypes()
			.then(data => product.setTypes(data)) // При удачном запросы в setTipes передаем то, что вернулось в запросе
		fetchBrands()
			.then(data => product.setBrands(data)) // При удачном запросы в setBrands передаем то, что вернулось в запросе
		fetchProducts(null, null, 1, 3)
			.then(data => {
				product.setProducts(data.rows) // При удачном запросы в setProducts передаем то, что вернулось в запросе
				product.setTotalCount(data.count) // Кол-во товаров по запросу
			})
	})

	useEffect(() => {
		fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, 2)
			.then(data => {
				product.setProducts(data.rows) // При удачном запросы в setProducts передаем то, что вернулось в запросе
				product.setTotalCount(data.count) // Кол-во товаров по запросу
			})
		// eslint-disable-next-line
	}, [product.page, product.selectedType, product.selectedBrand])

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
					<ProductList />
					<Pages />
				</Col>
			</Row>
		</Container>
	)
})

export { Shop }