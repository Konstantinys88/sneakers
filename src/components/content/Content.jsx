import './content.scss';
import Cards from "../card/Cards";
import axios from 'axios';

import { useEffect, useState } from 'react';



const Content = ({ onAddToCart, onAddFavorites }) => {



    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const itemsResponse = await axios.get("https://658ab9bbba789a962237a855.mockapi.io/items");
            setItems(itemsResponse.data)

            setLoading(false);
        }
        fetchData();

    }, []);

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    const renderCards = (arr) => {
        const items = arr.filter(item => item.name.toLowerCase()
            .includes(searchValue.toLowerCase()))
            .map((item, index) => {
                return (
                    <Cards
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.img}
                        id={item.id}
                        // isFavorited ={true}
                        // added={stateCartItems.isAddedItems(item.id)}
                        onPlus={(obj) => onAddToCart(obj)}
                        onAddFavorites={(obj) => onAddFavorites(obj)}
                        isLoading={loading}
                    />
                )
            });
        return (
            <>
                {items}
            </>
        )
    };

    const cardsItems = renderCards(items);

    return (
        <div className="content">

            <div className="searchContainer">
                <h1 className="content__title">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="searchBlock">
                    <img className="searchBlock__icon" src="img/search.svg" alt="search" />
                    <input onChange={onChangeSearchInput} className="searchBlock__search" type="text" placeholder="Поиск" />
                </div>
            </div>

            <div className="content__sneackers">
                {cardsItems}
            </div>

        </div>

    )
}

export default Content;