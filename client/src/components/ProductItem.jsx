import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router';
// import star from "../assets/star.png"; // Импорт картинка для рейтинга
import { PRODUCT_ROUTE } from '../utils/consts';

//! Изменить захардкоденную надпись с брендом девайса

const ProductItem = ({ product }) => { // Элемент списка девайсов props = текущий элемент итерации
	const history = useHistory() // хук для динамического передвижения по странице
	// console.log(product);
	return (
		// Занимает 3 столбца
		<Col
			md={3}
			className={"mt-3"}
			onClick={() => history.push(`${PRODUCT_ROUTE}/${product.id}`)} // Слушатель нажатия, при котором переход на страницу конкретного товара
		>
			{/* Карточка товара */}
			<Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
				{/* Картинка девайса */}
				<Image width={150} height={150} src={`${process.env.REACT_APP_API_URL}${product.img}`} />
				{/* Блок с названием */}
				<div className=" mt-1 d-flex justify-content-between align-items-center">
					{product.name}
				</div>


			</Card>
		</Col>
	)
}

export { ProductItem }