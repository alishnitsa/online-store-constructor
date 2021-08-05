import { observer } from "mobx-react-lite";
import React, { useEffect, useContext, useState } from "react"
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar";
import { check } from "./http/userAPI";

const App = observer(() => {
	const { user } = useContext(Context) // Получение состояния пользователя
	const [loading, setLoading] = useState(true) // Загрузка содержимого страницы

	useEffect(() => { // ! Добавить здесь комменты
		check()
			.then(data => {
				user.setUser(true)
				user.setIsAuth(true)
			})
			.finally(() => setLoading(false))
	})

	if (loading) {
		return <Spinner animation={"grow"} color={"white"} /> // loader
	}

	return (
		<BrowserRouter>
			{/* Навигационное меню */}
			<NavBar />
			<AppRouter />
		</BrowserRouter>
	);
})

export default App;
