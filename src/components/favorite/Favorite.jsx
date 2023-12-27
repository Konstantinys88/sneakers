import './favorites.scss'
import Cards from '../card/Cards';

import { useContext } from 'react';
import { AppContext } from '../../App';

const Favorite = ({ onAddToCart}) => {

    const stateFavorite = useContext(AppContext);

    const renderCards = (arr) => {
        const items = arr.filter(item => item.name.toLowerCase())
            .map((item, index) => {
                return (
                    <Cards
                        key={index}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        id={item.id}
                        isFavorited ={true}
                        onPlus={(obj) => onAddToCart(obj)}
                    />

                )
            });
        return (
            <>
                {items}
            </>
        )
    };

    const cardsItems = renderCards(stateFavorite.favorite);

    return (
        <div className="favorites">
            <h1>Избранное</h1>
            <div className='favorites__sneackers'>
                {cardsItems}
            </div>
        </div>

    )
}

export default Favorite;