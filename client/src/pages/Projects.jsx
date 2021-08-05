import { observer } from 'mobx-react-lite'
import React from 'react'
import { Container } from 'react-bootstrap'
import { ProjectList } from '../components/ProjectList'

const Projects = observer(() => {

	return (
		<Container >
			<h1 style={{ textAlign: 'center' }}>Проекты</h1>
			<ProjectList />
		</Container>
	)
})

export { Projects }