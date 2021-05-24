import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
// import { BasketList } from "../components/BasketList";
import { Col, Container, Row } from 'react-bootstrap'
import { fetchUser } from '../http/userAPI';
import { fetchBasket } from '../http/productAPI';

// TODO: Сделать самому корзину

const Basket = observer(() => { // Компонент корзины
	const { user } = useContext(Context)
	const { product } = useContext(Context)
	const email = localStorage.getItem('email')

	useEffect(() => {
		fetchUser(email)
			.then(data => user.setUserInfo(data.userId.id))

	})

	useEffect(() => {
		// TODO: Доделать
		fetchBasket(user.userInfo)
			.then(data => product.setBasket(data.id))
			.catch(e => console.log(e))
	})

	console.log(user);
	console.log(product);

	return (
		<Container>
			{/* Строка из 12 колонок */}
			<Row className="mt-2" >
				<Col md={12}>
					{/* <BasketList /> */}
				</Col>
			</Row>
		</Container>
	)
})

export { Basket }