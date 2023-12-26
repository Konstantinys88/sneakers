
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Driver from "./components/drawer/Drawer";

import { useEffect, useState } from 'react';
import axios from "axios";


function App() {

	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	

	useEffect(() => {
		axios.get("https://658ab9bbba789a962237a855.mockapi.io/cart").then(res => {
			setCartItems(res.data)
		});
	}, [])


	const onAddToCart = (obj) => {
		axios.post('https://658ab9bbba789a962237a855.mockapi.io/cart', obj);
		setCartItems(prev => [...prev, obj]);
	};

	const onRemoweItem = (id) => {
		axios.delete(`https://658ab9bbba789a962237a855.mockapi.io/cart/${id}`);
		setCartItems((prev) => prev.filter(item => item.id !== id ));
	}


	return (
		<div className="wrapper">

			{cartOpen ? <Driver
				onTogleCart={() => setCartOpen(!cartOpen)}
				itemsData={cartItems}
				onRemoweItem={onRemoweItem} /> : null}

			<Header onTogleCart={() => setCartOpen(!cartOpen)} />
			<Content onAddToCart={onAddToCart} />

		</div >
	);
}

export default App;
