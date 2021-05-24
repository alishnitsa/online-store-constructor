import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Row } from 'react-bootstrap'
// import { Context } from '..'
// import { fetchBasketProducts, fetchBrands } from '../http/productAPI';

const BasketList = observer(() => {

	// const { product } = useContext(Context) // Получение из контекта девайс store
	// const basketId = 1
	// useEffect(() => { // Единожды при открытии Shop подгружаются устройства
	// 	fetchBrands()
	// 		.then(data => product.setBrands(data)) // При удачном запросы в setBrands передаем то, что вернулось в запросе
	// })
	// useEffect(() => {
	// 	fetchBasketProducts(basketId)
	// 		.then(data => product.setBasketProducts(data)) // При удачном запросы в setTipes передаем то, что вернулось в запросе
	// }, [product])
	// console.log(localStorage);
	// console.log(product);

	return (
		// Вывод девайсов
		<Row className="d-flex">
			{/* {product.products.map(product =>
				<ProductItem key={product.id} product={product} />
			)} */}
		</Row>
	)
}
)
export { BasketList }