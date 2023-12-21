

function App() {
	return (
		<div className="wrapper">
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
						<li>
							<img className="header__icon" width={18} height={18} src="img/card.svg" alt="logo" />
							<span className="headerRight__text">1205 руб.</span>
						</li>
						<li>
							<img className="header__icon" width={18} height={18} src="img/like.svg" alt="logo" />
							<span className="headerRight__text">Избранное</span>
						</li>
						<li>
							<img className="header__icon" width={18} height={18} src="img/user.svg" alt="logo" />
						</li>
					</ul>
				</div>

			</header>


			<div className="content">

				<h1 className="content__title">Все кроссовки</h1>

				<div className="content__sneackers">

					<div className="card">
						<img width={133} height={112} src="/img/sneackers/2.jpg" alt="sneackers" />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
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

					<div className="card">
						<img width={133} height={112} src="/img/sneackers/2.jpg" alt="sneackers" />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
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

					<div className="card">
						<img width={133} height={112} src="/img/sneackers/2.jpg" alt="sneackers" />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
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

					<div className="card">
						<img width={133} height={112} src="/img/sneackers/2.jpg" alt="sneackers" />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
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
				</div>

			</div>

		</div>
	);
}

export default App;
