
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Driver from "./components/drawer/Drawer";


function App() {
	return (
		<div className="wrapper">

			<Driver/>

			<Header />
			<Content />

		</div >
	);
}

export default App;
