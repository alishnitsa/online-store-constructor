import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { UserStore } from './store/UserStore.jsx';
import { ProjectStore } from './store/ProjectStore.jsx';
import { HeaderPatternStore } from './store/HeaderPatternStore.jsx';
import { FooterPatternStore } from './store/FooterPatternStore.jsx';
import { BlockPatternStore } from './store/BlockPatternStore.jsx';


const Context = createContext(null) // Контекст для работы с состояниями

ReactDOM.render(
	<Context.Provider value={{
		user: new UserStore(), // Состояние пользователя
		project: new ProjectStore(),
		headerPattern: new HeaderPatternStore(),
		blockPattern: new BlockPatternStore(),
		footerPattern: new FooterPatternStore()
	}}>
		<App style={{ backgroundColor: '#272222' }} />
	</Context.Provider>,
	document.getElementById('root')
);

export { Context }