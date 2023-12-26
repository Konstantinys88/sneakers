import './content.scss';
import Cards from "../card/Cards";

import { useEffect, useState } from 'react';


const Content = ({ onAddToCart }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://658ab9bbba789a962237a855.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then(res => setItems(res));
    }, []);

    const renderCards = (arr) => {
        const items = arr.map((item, index) => {
            return (
                <Cards
                    key={index}
                    name={item.name}
                    price={item.price}
                    image={item.img}
                    onPlus={(obj) => onAddToCart(obj)}
                    onFavorite={() => console.log('Добавили в закладки')}
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
                <h1 className="content__title">Все кроссовки</h1>
                <div className="searchBlock">
                    <img className="searchBlock__icon" src="img/search.svg" alt="search" />
                    <input className="searchBlock__search" type="text" placeholder="Поиск" />
                </div>
            </div>

            <div className="content__sneackers">
                {cardsItems}
            </div>

        </div>

    )
}

export default Content;