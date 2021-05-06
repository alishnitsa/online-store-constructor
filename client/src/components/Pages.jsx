import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '..'

const Pages = observer(() => {
	const { product } = useContext(Context) // Получение store девайсов
	const pageCount = Math.ceil(product.totalCount / product.limit) // Страницы
	const pages = []
	console.log(product.limit);
	for (let i = 0; i < pageCount; i++) { // Заполняем массив страниц количеством страниц
		pages.push(i + 1)
	}

	return (
		<div>
			<Pagination className="mt-5">
				{
					pages.map(page =>
						<Pagination.Item
							key={page}
							active={product.page === page}
							onClick={() => product.setPage(page)}
						>
							{page}
						</Pagination.Item>
					)
				}
			</Pagination>
		</div>
	)
})

export { Pages }