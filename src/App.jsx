
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Overlay from "./components/overlay/Overlay";


function App() {
	return (
		<div className="wrapper">

			<Overlay/>

			<Header />
			<Content />

		</div >
	);
}

export default App;
