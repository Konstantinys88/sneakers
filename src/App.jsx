
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Driver from "./components/drawer/Drawer";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

import { createContext } from 'react';

import axios from "axios";
import Favorite from "./components/favorite/Favorite";
import Orders from "./components/orders/Orders";

export const AppContext = createContext({});


function App() {

	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [favorite, setFavorite] = useState([]);

	useEffect(() => {

		async function fetchData() {
			try {
				const cartResponse = await axios.get("https://658ab9bbba789a962237a855.mockapi.io/cart");
				const favoritesResponse = await axios.get("https://658b0e2aba789a9622386014.mockapi.io/favorites");

				setCartItems(cartResponse.data);
				setFavorite(favoritesResponse.data);
			} catch (error) {
				console.log(error)
			}
		}

		fetchData();

	}, []);


	const onAddToCart = async (obj) => {
		// console.log(obj)
		try {
			const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id));
			if (findItem) {
				console.log('Уже есть')
				setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
				await axios.delete(`https://658ab9bbba789a962237a855.mockapi.io/cart/${findItem.id}`);
			} else {
				const { data } = await axios.post('https://658ab9bbba789a962237a855.mockapi.io/cart', obj);
				setCartItems(prev => [...prev, data]);
			}
		} catch (error) {
			console.log('Не удалось добавить в корзиру !', error);
		}
	};

	const onRemoweItem = async (id) => {
		await axios.delete(`https://658ab9bbba789a962237a855.mockapi.io/cart/${id}`);
		setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));

	}

	const onAddFavorites = async (obj) => {
		try {
			if (favorite.find(item => Number(item.id) === Number(obj.id))) {
				axios.delete(`https://658b0e2aba789a9622386014.mockapi.io/favorites/${obj.id}`);
				setFavorite(prev => prev.filter(item => item.id !== obj.id));
			} else {
				const { data } = await axios.post(`https://658b0e2aba789a9622386014.mockapi.io/favorites`, obj);
				setFavorite(prev => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в избранное !');
		}
	};

	const isAddedItems = (id) => {
		return cartItems.some(obj => Number(obj.parentId) === Number(id))
	}


	return (
		<AppContext.Provider value={{ cartItems, setCartItems, favorite, onAddFavorites, isAddedItems, setCartOpen, onAddToCart }}>

			<div className="wrapper">
				{cartOpen ? <Driver
					onTogleCart={() => setCartOpen(!cartOpen)}
					itemsData={cartItems}
					onRemoweItem={onRemoweItem} /> : null}

				<Header onTogleCart={() => setCartOpen(!cartOpen)} />

				<Routes>
					<Route path="/" element={<Content
						onAddToCart={onAddToCart}
						onAddFavorites={onAddFavorites}
					/>} />

					<Route path="favorite" element={<Favorite onAddToCart={onAddToCart}/>} />

					<Route path="orders" element={<Orders />} />

				</Routes>
			</div >

		</AppContext.Provider>
	);
}

export default App;


// 2.51