
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Driver from "./components/drawer/Drawer";

import { useState } from 'react';


function App() {

	const [cartOpen, setCartOpen] = useState(false);


	return (
		<div className="wrapper">

			{cartOpen ? <Driver onTogleCart={() => setCartOpen(!cartOpen)} /> : null}

			<Header onTogleCart={() => setCartOpen(!cartOpen)} />
			<Content />

		</div >
	);
}

export default App;
