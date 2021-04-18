import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from "../assets/big star.png";

const DevicePage = () => { // Компонент страницы девайса
	const device = { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.iguides.ru/upload/medialibrary/f74/f74a05700b894adeadca26c6abaa20f2.jpg` } // ! Временно
	const description = [
		{ id: 1, title: 'Оперативная память', description: '5 Гб' },
		{ id: 2, title: 'Камера', description: '12 Мп' },
		{ id: 3, title: 'Процессор', description: 'Пентиум 3' },
		{ id: 4, title: 'Количество ядер', description: '2' },
		{ id: 5, title: 'Аккумулятор', description: '4000' },
	]
	return (
		<Container className="mt-3" >
			<Row>
				{/* Изображение */}
				<Col md={4}>
					<Image width={300} height={300} src={device.img} />
				</Col>
				{/* Рейтинг */}
				<Col md={4}>
					<Row className="d-flex flex-column align-items-center">
						<h2>{device.name}</h2>
						<div
							className="d-flex align-items-center justify-content-center"
							style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
						>
							{device.rating}
						</div>
					</Row>
				</Col>
				{/* Добавить в корзину */}
				<Col md={4}>
					<Card
						className="d-flex flex-column align-items-center justify-content-around"
						style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
					>
						<h3>От: {device.price} руб.</h3>
						<Button variant={"outline-dark"}>Добавить в корзину</Button>
					</Card>

				</Col>
			</Row>
			{/* Характеристики */}
			<Row className="d-flex flex-column m-3" >
				<h1>Характеристики</h1>
				{description.map((info, index) =>
					// Задний фон чередуется через одну
					<Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
						{info.title}: {info.description}
					</Row>
				)}
			</Row>
		</Container>
	)
}

export { DevicePage }