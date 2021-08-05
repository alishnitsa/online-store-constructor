import { $host } from "./index";

// ! Сделать создание проекта
// const createProject = async (project) => {
// 	const { data } = await $host.post('api/project', {
// 		query: {
// 			name, userId, headerPatternId, blockPatternId, footerPatternId
// 		}
// 	})
// 	return data
// }

const fetchProjects = async (userId) => {
	const { data } = await $host.get('api/project', {
		params: {
			userId: 1
		}
	})
	return data
}

const fetchHeaderPattern = async () => {
	const { data } = await $host.get('api/header-pattern')
	console.log(data);
	return data
}
const fetchBlockPattern = async () => {
	const { data } = await $host.get('api/block-pattern')
	return data
}
const fetchFooterPattern = async () => {
	const { data } = await $host.get('api/footer-pattern')
	return data
}

export {
	fetchProjects,
	fetchHeaderPattern,
	fetchBlockPattern,
	fetchFooterPattern
}