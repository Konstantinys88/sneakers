import './header.scss';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

const Header = ({ onTogleCart }) => {

    const { totalPrice } = useCart();

    return (
        <header className="header">

            <div className="headerLeft">
                <img width={40} height={40} src="img/logoSneakers.png" alt="logo" />
                <Link to={'/'} className="headerInfo">
                    <h3 className="headerLeft__title">Sneakers store</h3>
                    <p className="headerLeft__subTitle">Магазин лучших кросовок</p>
                </Link>

            </div>

            <div className="headerRight">
                <ul className="headerRight__list">
                    <li onClick={onTogleCart}>
                        <img className="header__icon" width={18} height={18} src="img/card.svg" alt="cart" />
                        <span className="headerRight__text">{totalPrice}</span>
                    </li>
                    <li>
                        <Link to={'/favorite'}>
                            <img className="header__icon" width={18} height={18} src="img/like.svg" alt="like" />
                            <span className="headerRight__text">Избранное</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/orders`}>
                            <img className="header__icon" width={18} height={18} src="img/user.svg" alt="user" />
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header;