import { Admin } from "./pages/Admin";
import { Basket } from "./pages/Basket";
import { Shop } from "./pages/Shop";
import { Auth } from "./pages/Auth";
import { ProductPage } from "./pages/ProductPage";

import { // Импорт путей
	ADMIN_ROUTE,
	BASKET_ROUTE,
	PRODUCT_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	SHOP_ROUTE
} from "./utils/consts";

export const authRoutes = [ // Роутинг для авторизованных пользователей
	{
		path: ADMIN_ROUTE,
		Component: Admin
	},
	{
		path: BASKET_ROUTE,
		Component: Basket
	}
],
	publicRoutes = [	// Роутинг для всех пользователей
		{
			path: SHOP_ROUTE,
			Component: Shop
		},
		{
			path: LOGIN_ROUTE,
			Component: Auth
		},
		{
			path: REGISTRATION_ROUTE,
			Component: Auth
		},
		{
			path: `${PRODUCT_ROUTE}/:id`,
			Component: ProductPage
		}
	]