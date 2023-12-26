import './header.scss';

const Header = ({onTogleCart}) => {


    return (
        <header className="header">

            <div className="headerLeft">
                <img width={40} height={40} src="img/logoSneakers.png" alt="logo" />
                <div className="headerInfo">
                    <h3 className="headerLeft__title">Sneakers store</h3>
                    <p className="headerLeft__subTitle">Магазин лучших кросовок</p>
                </div>

            </div>

            <div className="headerRight">
                <ul className="headerRight__list">
                    <li onClick={onTogleCart}>
                        <img className="header__icon" width={18} height={18} src="img/card.svg" alt="cart" />
                        <span className="headerRight__text">1205 руб.</span>
                    </li>
                    <li>
                        <img className="header__icon" width={18} height={18} src="img/like.svg" alt="like" />
                        <span className="headerRight__text">Избранное</span>
                    </li>
                    <li>
                        <img className="header__icon" width={18} height={18} src="img/user.svg" alt="user" />
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header;