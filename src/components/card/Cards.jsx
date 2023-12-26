import { useState } from 'react';
import './cards.scss';

const Cards = ({ name, price, image, onPlus, onFavorite }) => {

    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus({name, price, image});
        setIsAdded(!isAdded);
    }

    return (
        <div className="card">
            <div className="card__heart" onClick={onFavorite}>
                <img
                    className="card__heart"
                    width={32} height={32}
                    src="/img/heart.svg"
                    alt="heart" />
            </div>
            <img width={133} height={112} src={image} alt="sneackers" />
            <p>{name}</p>
            <br />
            <div className="card__bottom">
                <div className="card__price">
                    <span>Цена:</span>
                    <br />
                    <b>{price} руб</b>
                </div>
                <button className="card__button" onClick={onClickPlus}>
                    <img
                        width={32}
                        height={32}
                        src={isAdded ? "/img/plusAdd.svg": "/img/plus.svg"}
                        alt="plus" />
                </button>
            </div>
        </div>
    )
}

export default Cards;