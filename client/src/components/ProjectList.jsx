import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Row } from 'react-bootstrap'
import { ProjectItem } from './ProjectItem'
import { ProjectNew } from './ProjectNew'
import { fetchProjects } from '../http/projectAPI'
import { Context } from '..'

const ProjectList = observer(() => {
	const { project } = useContext(Context)

	useEffect(() => { // Единожды при открытии Shop подгружаются устройства
		fetchProjects(1)
			.then(data => project.setProject(data)) // При удачном запросы в setProjects передаем то, что вернулось в запросе
	}, [project])
	console.log(project);
	return (
		<Row className="d-flex">
			{Object.values(project.projects).map(project =>
				<ProjectItem key={project.id} project={project} />
			)}
			<ProjectNew />
		</Row>
	)
})

export { ProjectList }