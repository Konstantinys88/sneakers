
import './overlay.scss';
const Overlay = ({displayDriwer, handleDisplayDriwer}) => {

    let styleDisplayDraver = displayDriwer ? { 'display': 'block' } : { 'display': 'none' };

    const View = () => {
        return (
            <div className="cartItem">
                <img width={70} height={70} src="/img/sneackers/2.jpg" alt="sneackers" />
                <div>
                    <p>Мужские кроссовки <br />Nike Blazer Mid Suede</p>
                    <b>12 999 руб.</b>
                </div>
                <img className="remove" src="/img/btnRemove.svg" alt="remove" />
            </div>
        )
    }

    const content = <View />

    return (
        <div
            style={styleDisplayDraver}
            className="overlay">

            <div className="driwer">
                <h2>Корзина
                    <img onClick={handleDisplayDriwer} className="remove" src="/img/btnRemove.svg" alt="remove" />
                </h2>

                <div className="cardItems">
                    {content}
                    {content}
                </div>

                <div className="cardAmountPrice">
                    <ul>
                        <li className="amountPrice">
                            <span className="amountPrice__text">Итого</span>
                            <div className="amountPrice__dash"></div>
                            <b>21 498 руб. </b>
                        </li>
                    </ul>
                    <button className="cardAmountPrice__button">Оформить заказ</button>
                </div>

            </div>

        </div>
    )
}

export default Overlay;