
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Driver from "./components/drawer/Drawer";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import Favorite from "./components/favorite/Favorite";


function App() {

	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [favorite, setFavorite] = useState([]);


	useEffect(() => {
		axios.get("https://658ab9bbba789a962237a855.mockapi.io/cart").then(res => {
			setCartItems(res.data)
		});
		axios.get("https://658b0e2aba789a9622386014.mockapi.io/favorites").then(res => {
			setFavorite(res.data)
		});
	}, []);


	const onAddToCart = (obj) => {
		try {
			if (cartItems.find(item => item.id === obj.id)) {
				console.log('Уже есть')
			} else {
				axios.post('https://658ab9bbba789a962237a855.mockapi.io/cart', obj);
				setCartItems(prev => [...prev, obj]);
			}
		} catch (error) {
			alert('Не удалось добавить в корзиру !');
		}
	};

	const onRemoweItem = async (id) => {
		await axios.delete(`https://658ab9bbba789a962237a855.mockapi.io/cart/${id}`);
		setCartItems((prev) => prev.filter(item => item.id !== id));

	}

	const onAddFavorites = async (obj) => {
		try {
			if (favorite.find(item => item.id === obj.id)) {
				axios.delete(`https://658b0e2aba789a9622386014.mockapi.io/favorites/${obj.id}`);
				// setFavorite(prev => prev.filter(item => item.id !== obj.id));
			} else {
				const { data } = await axios.post(`https://658b0e2aba789a9622386014.mockapi.io/favorites`, obj);
				setFavorite(prev => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в избранное !');
		}
	};


	return (
		<div className="wrapper">

			{cartOpen ? <Driver
				onTogleCart={() => setCartOpen(!cartOpen)}
				itemsData={cartItems}
				onRemoweItem={onRemoweItem} /> : null}

			<Header onTogleCart={() => setCartOpen(!cartOpen)} />

			<Routes>
				<Route path="/" element={<Content
					onAddToCart={onAddToCart}
					onAddFavorites={onAddFavorites} />} />

				<Route path="favorite" element={<Favorite
					favorite={favorite}
					onAddFavorites={onAddFavorites} />} />
			</Routes>

		</div >
	);
}

export default App;


