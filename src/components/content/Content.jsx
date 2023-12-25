import './content.scss';
import Cards from "../card/Cards";

const arr = [
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        img: '/img/sneackers/2.jpg',
    },
    {
        name: 'Мужские Кроссовки Nike Air Max 270',
        price: 11999,
        img: '/img/sneackers/3.jpg',
    },
    {
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 13999,
        img: '/img/sneackers/4.jpg',
    },
    {
        name: 'Мужские Кроссовки Under Armour Curry 8',
        price: 9999,
        img: '/img/sneackers/5.jpg',
    },
    {
        name: 'Мужские Кроссовки Under Armour Curry 8',
        price: 5999,
        img: '/img/sneackers/6.jpg',
    },
];

const Content = () => {

    const renderCards = (arr) => {
        const items = arr.map((item, index) => {
            return (
                <Cards key={index} name={item.name} price={item.price} image={item.img} />
            )
        });
        return (
            <>
                {items}
            </>
        )
    };

    const cardsItems = renderCards(arr);



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