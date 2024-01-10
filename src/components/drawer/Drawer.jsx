import './overlay.scss';

import Info from '../info/Info';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';

import axios from 'axios';


const delay = (ms) => {
    new Promise((resolve) => setTimeout(resolve, ms))
}

const Overlay = ({ onTogleCart, onRemoweItem }) => {

    const { cartItems, setCartItems, totalPrice } = useCart();
    const [isOrderComplete, setIsOrderComplete] = useState();
    const [orderId, setOrderId] = useState(null);

    const onClickOrder = async () => {
        try {
            const { data } = await axios.post(`https://658b0e2aba789a9622386014.mockapi.io/orders`, { items: cartItems });
            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://658ab9bbba789a962237a855.mockapi.io/cart/${item.id}`);
                delay(10000)
            }

        } catch (error) {
            console.log(error);
        }
    }

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

    const cartItemsRender = renderCartItems(cartItems);

    const cartItemsContent = cartItems.length > 0 ? cartItemsRender : <Info
        title={`Корзина пуста`}
        description={`Добавьте хотябы одну пару кросовок чтобы сделать заказ...`}
        image={`/img/empty-cart.jpg`} />;

    const content = isOrderComplete ? <Info
        title={`Заказ отправлен`}
        description={`Нашы сотрудники уже собирают ваш заказ № ${orderId} !!!`}
        image={`/img/empty-cart.jpg`} /> : cartItemsContent;

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

                    {content}

                </div>

                <div className="cardAmountPrice">
                    <ul>
                        <li className="amountPrice">
                            <span className="amountPrice__text">Итого</span>
                            <div className="amountPrice__dash"></div>
                            <b>{totalPrice} руб.</b>
                        </li>
                    </ul>
                    <button onClick={onClickOrder} className="cardAmountPrice__button">Оформить заказ</button>
                </div>

            </div>

        </div>
    )
}

export default Overlay;