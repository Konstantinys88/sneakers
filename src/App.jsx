
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Driver from "./components/drawer/Drawer";

import { useState } from 'react';


function App() {

	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const onAddToCart = (obj) => {
		setCartItems(prev => [...prev, obj]);
	};


	return (
		<div className="wrapper">

			{cartOpen ? <Driver
				onTogleCart={() => setCartOpen(!cartOpen)}
				itemsData={cartItems} /> : null}

			<Header onTogleCart={() => setCartOpen(!cartOpen)} />
			<Content onAddToCart={onAddToCart} />

		</div >
	);
}

export default App;
