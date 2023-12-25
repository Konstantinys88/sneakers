
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Driver from "./components/drawer/Drawer";

import { useState } from 'react';


function App() {

	const [displayDriwer, setDisplayDriwer] = useState(false);
	const handleDisplayDriwer = () => {
		setDisplayDriwer(!displayDriwer)
	}


	return (
		<div className="wrapper">

			<Driver
				displayDriwer={displayDriwer}
				handleDisplayDriwer={handleDisplayDriwer}
			/>

			<Header
				handleDisplayDriwer={handleDisplayDriwer}
			/>

			<Content />

		</div >
	);
}

export default App;
