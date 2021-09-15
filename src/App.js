import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';




function App(){
	
	const greeting = 'Bienvenido a tu ferretería online';

	return (
    	<div>
    		<NavBar />
			<ItemListContainer greeting={ greeting } />
			<ItemDetailContainer />
    	</div>
  	);
}

export default App;