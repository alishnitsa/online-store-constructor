import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { UserStore } from './store/UserStore.jsx';
import { DeviceStore } from './store/DeviceStore';


const Context = createContext(null) // Контекст для работы с состояниями

ReactDOM.render(
	<Context.Provider value={{
		user: new UserStore(), // Состояние пользователя
		device: new DeviceStore() // Состояние девайсов
	}}>
		<App />
	</Context.Provider>,
	document.getElementById('root')
);

export { Context }