import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => { // Панель с типами
	const { product } = useContext(Context) // Получение девайсов из store
	return (
		// Список типов
		<ListGroup>
			{/* Пробегаемся по массиву типов и выводим в виде списка */}
			{product.types.map(type =>
				<ListGroup.Item
					style={{ cursor: 'pointer' }}
					active={type.id === product.selectedType.id} // Активный, если id типа итерации совпадает с элементом store
					onClick={() => product.setSelectedType(type)} // Слушатель события нажатия 
					key={type.id} // Ключ для  элемента списка
				>
					{type.name}
				</ListGroup.Item>
			)}
		</ListGroup>
	)
}
)
export { TypeBar }

