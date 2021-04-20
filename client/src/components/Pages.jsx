import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '..'

const Pages = observer(() => {
	const { device } = useContext(Context) // Получение store девайсов
	const pageCount = Math.ceil(device.totalCount / device.limit) // Страницы
	const pages = []

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
							active={device.page === page}
							onClick={() => device.setPage(page)}
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