import './cards.scss';

const Cards = () => {
    return (
        <div className="card">
            <div className="card__heart">
                <img className="card__heart" width={32} height={32} src="/img/heart.svg" alt="heart" />
            </div>
            <img width={133} height={112} src="/img/sneackers/2.jpg" alt="sneackers" />
            <p>Мужские кроссовки <br />Nike Blazer Mid Suede</p>
            <br />
            <div className="card__bottom">
                <div className="card__price">
                    <span>Цена:</span>
                    <br />
                    <b>12 999 руб.</b>
                </div>
                <button className="card__button">
                    <img width={32} height={32} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
}

export default Cards;