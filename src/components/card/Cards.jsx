import { useState } from 'react';
import './cards.scss';

const Cards = ({ id, name, price, image, onPlus, onAddFavorites, isFavorited = false, added = false}) => {

    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(isFavorited);

    const onClickPlus = () => {
        onPlus({ id, name, price, image });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onAddFavorites({ id, name, price, image });
        setIsFavorite(!isFavorite);
    }


    return (
        <div className="card">
            <div className="card__heart" onClick={onClickFavorite}>
                <img
                    className="card__heart"
                    width={32} height={32}
                    src={isFavorite ? "/img/heartLike.svg" : "/img/heart.svg"}
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
                <button className="card__button" onClick={onClickPlus} >
                    <img
                        width={32}
                        height={32}
                        src={isAdded ? "/img/plusAdd.svg" : "/img/plus.svg"}
                        alt="plus" />
                </button>
            </div>
        </div>
    )
}

export default Cards;