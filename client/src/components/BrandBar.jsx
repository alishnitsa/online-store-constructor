import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '..'

const BrandBar = observer(() => {
	const { product } = useContext(Context) // Получение девайсов из store
	return (
		<Row className="d-flex" >
			{product.brands.map(brand =>
				<Card
					key={brand.id} // Ключ списка
					className="p-3"
					onClick={() => product.setSelectedBrand(brand)} // Слушатель нажатия
					style={{ cursor: 'pointer' }}
					border={brand.id === product.selectedBrand.id ? 'danger' : 'light'} // Рамка, если id бренда совпадает с элементом store
				>
					{brand.name}
				</Card>
			)}
		</Row>
	)
}
)

export { BrandBar }