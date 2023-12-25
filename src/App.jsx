
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Driver from "./components/overlay/Driwer";


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
