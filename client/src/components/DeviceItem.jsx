import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router';
import star from "../assets/star.png"; // Импорт картинка для рейтинга
import { DEVICE_ROUTE } from '../utils/consts';

//! Изменить захардкоденную надпись с брендом девайса

const DeviceItem = ({ device }) => { // Элемент списка девайсов props = текущий элемент итерации
	const history = useHistory() // хук для динамического передвижения по странице
	console.log(history)
	return (
		// Занимает 3 столбца
		<Col
			md={3}
			className={"mt-3"}
			onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)} // Слушатель нажатия, при котором переход на страницу конкретного товара
		>
			{/* Карточка товара */}
			<Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
				{/* Картинка девайса */}
				<Image width={150} height={150} src={device.img} />
				{/* Блок с названием и рейтингом девайса */}
				<div className=" mt-1 d-flex justify-content-between align-items-center">
					{/* Бренд девайса */}
					<div className="text-black-50">Samsung..</div>
					{/* Рейтинг */}
					<div className="d-flex align-items-center">
						<div className="">{device.rating}</div>
						<Image width={15} height={15} src={star} />
					</div>
				</div>
				{/* Название девайса */}
				{device.name}
			</Card>
		</Col>
	)
}

export { DeviceItem }