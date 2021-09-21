import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';




function App(){
	
	const greeting = 'Bienvenido a tu ferretería online';

	return (
    	<BrowserRouter>
			<div>
    			<NavBar />
				<Switch>
					<Route path='/' exact>
						<ItemListContainer greeting={ greeting } />
					</Route>
					<Route path='/categoria/:idCategoria' component={ItemListContainer}/>
					<Route path='/detalle/:idProducto' component={ItemDetailContainer} />
				</Switch>
    		</div>
		</BrowserRouter>
  	);

}

export default App;