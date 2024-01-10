import { useState } from 'react';
import './cards.scss';

import ContentLoader from "react-content-loader";

import { useContext } from 'react';
import { AppContext } from '../../App';

const Cards = ({ id, name, price, image, onPlus, isFavorited = false, isLoading = false, parentId }) => {

    const stateCards = useContext(AppContext);
    const { isAddedItems } = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(isFavorited);
    const obj = { id, name, price, image, parentId: id }

    const onClickPlus = () => {
        onPlus(obj);
    }

    const onClickFavorite = () => {
        stateCards.onAddFavorites(obj);
        setIsFavorite(!isFavorite);
    }


    return (
        <>
            {isLoading ?
                <ContentLoader
                    speed={2}
                    width={210}
                    height={260}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
                :
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
                                src={isAddedItems(id) ? "/img/plusAdd.svg" : "/img/plus.svg"}
                                alt="plus" />
                        </button>
                    </div>
                </div>
            }


        </>

    )
}

export default Cards;