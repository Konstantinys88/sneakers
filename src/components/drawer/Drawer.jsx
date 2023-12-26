
import './overlay.scss';
const Overlay = ({ onTogleCart, itemsData = [], onRemoweItem }) => {


    const renderCartItems = (arr) => {
        const items = arr.map((item, index) => {
            return (
                <div className="cartItem" key={index}>
                    <img width={70} height={70} src={item.image} alt="sneackers" />
                    <div>
                        <p>{item.name}</p>
                        <b>{item.price}</b>
                    </div>
                    <img onClick={() => onRemoweItem(item.id)} className="remove" src="/img/btnRemove.svg" alt="remove" />
                </div>
            )
        });
        return (
            <>
                {items}
            </>
        );
    };

    const cartItems = renderCartItems(itemsData);
    const cartItemsContent = itemsData.length > 0 ? cartItems : "Ваша корзина пуста";

    return (
        <div className="overlay">

            <div className="driwer">
                <h2>Корзина
                    <img
                        className="remove"
                        src="/img/btnRemove.svg"
                        alt="remove"
                        onClick={onTogleCart} />
                </h2>

                <div className="cardItems">

                    {cartItemsContent}

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