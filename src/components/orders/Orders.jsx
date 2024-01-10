
import { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {

    const [orders, setOrders] = useState();

    useEffect(() => {

        async function fetchOrders() {
            try {
                const { data } = await axios.get(`https://658b0e2aba789a9622386014.mockapi.io/orders`);
                let orderData = data.map(obj => obj.items).flat()
                setOrders(orderData);

            } catch (error) {
                console.log(`Ошибка при запросе заказов ! + ${error}`);
            }
        }

        fetchOrders();

    }, [])

    const renderCards = (arr) => {
        const items = arr?.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <img width={133} height={112} src={item.image} alt="sneackers" />
                    <p>{item.name}</p>
                    <br />
                    <div className="card__bottom">
                        <div className="card__price">
                            <span>Цена:</span>
                            <br />
                            <b>{item.price} руб</b>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <>
                {items}
            </>
        )
    };

    const cardsItems = renderCards(orders);

    return (
        <div className="favorites">
            <h1>Мои заказы</h1>
            <div className='favorites__sneackers'>
                {cardsItems}
            </div>
        </div>

    )
}

export default Orders;