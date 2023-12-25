import './content.scss';
import Cards from "../card/Cards"

const Content = () => {
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
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>

        </div>

    )
}

export default Content;