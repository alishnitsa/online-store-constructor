import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '..'
import { DeviceItem } from './DeviceItem'

const DeviceList = observer(() => {
	const { device } = useContext(Context) // Получение из контекта девайс store
	return (
		// Вывод девайсов
		<Row className="d-flex">
			{device.devices.map(device =>
				<DeviceItem key={device.id} device={device} />
			)}
		</Row>
	)
}
)
export { DeviceList }