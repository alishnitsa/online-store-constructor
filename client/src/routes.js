import { Admin } from "./pages/Admin";
import { Auth } from "./pages/Auth";
import { Projects } from "./pages/Projects";
import { MainPage } from "./pages/MainPage";
import { Registration } from "./pages/Registration";
import { // Импорт путей
	ADMIN_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	PROJECTS_ROUTE,
	MAIN_ROUTE
} from "./utils/consts";
import { ProjectCreator } from "./pages/ProjectCreator";

export const authRoutes = [ // Роутинг для авторизованных пользователей
	{
		path: ADMIN_ROUTE,
		Component: Admin
	},
	{
		path: `${PROJECTS_ROUTE}/download/:id`,
		Component: Projects
	},
	{
		path: PROJECTS_ROUTE,
		Component: Projects
	},
	{
		path: `${PROJECTS_ROUTE}/project-creator`,
		Component: ProjectCreator
	},
],
	publicRoutes = [	// Роутинг для всех пользователей
		{
			path: MAIN_ROUTE,
			Component: MainPage
		},
		{
			path: LOGIN_ROUTE,
			Component: Auth
		},
		{
			path: REGISTRATION_ROUTE,
			Component: Registration
		},
		{
			path: REGISTRATION_ROUTE,
			Component: Auth
		},


	]