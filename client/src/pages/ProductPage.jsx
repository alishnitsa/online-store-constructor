import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from "../assets/big star.png";
import { useParams } from "react-router-dom"; // Хук для получения параметра строки запроса, для получения id устройства
import { fetchOneProduct } from '../http/productAPI';
const ProductPage = () => { // Компонент страницы девайса

	const [product, setProduct] = useState({ info: [] }) // Локальное состояние
	const { id } = useParams() // Из строки запроса получаем id
	useEffect(() => { // При открытии страницы единожды подгружаем девайс
		fetchOneProduct(id)
			.then(data => setProduct(data))
	}, [id])
	return (
		<Container className="mt-3" >
			<Row>
				{/* Изображение */}
				<Col md={4}>
					<Image width={300} height={300} src={`${process.env.REACT_APP_API_URL}/${product.img}`} />
				</Col>
				{/* Рейтинг */}
				<Col md={4}>
					<Row className="d-flex flex-column align-items-center">
						<h2>{product.name}</h2>
						<div
							className="d-flex align-items-center justify-content-center"
							style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
						>
							{product.rating}
						</div>
					</Row>
				</Col>
				{/* Добавить в корзину */}
				<Col md={4}>
					<Card
						className="d-flex flex-column align-items-center justify-content-around"
						style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
					>
						<h3>От: {product.price} руб.</h3>
						<Button variant={"outline-dark"}>Добавить в корзину</Button>
					</Card>

				</Col>
			</Row>
			{/* Характеристики */}
			<Row className="d-flex flex-column m-3" >
				<h1>Характеристики</h1>
				{product.info.map((info, index) =>
					// Задний фон чередуется через одну
					<Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
						{info.title}: {info.description}
					</Row>
				)}
			</Row>
		</Container>
	)
}

export { ProductPage }