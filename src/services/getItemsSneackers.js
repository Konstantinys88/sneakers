

const getItemsSneackers = () => {

	const getItems = (url) => {
		fetch(url).then((res) => {
			return res.json();
		});
	};


	return {
		getItems,
	}
}

export default getItemsSneackers;