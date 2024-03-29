import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

function App() {
	const [pageNumber, setPageNumber] = useState(1);
	const [fetchedData, setFetchedData] = useState([]);
	const { info, results } = fetchedData;

	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(api);
			const data = await response.json();
			setFetchedData(data);
		}
		fetchData();
	}, [api]);

	return (
		<div className="App">
			<h1 className="text-center ubuntu my-4">
				Rick & Morty <span className="text-primary">WiKi</span>
			</h1>

			<div className="container">
				<div className="row">
					<div className="col-3">
						<Filters />
					</div>
					<div className="col-8">
						<div className="row">
							<Cards />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
