import React from "react"
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";

function App() {
	return (
		<BrowserRouter> // * Роутер
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
