import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Generator } from './pages/Generator/index.js';
import { NotFound } from './pages/_404.jsx';
import './style.scss';
import { Meals } from './pages/Meals/index.js';
import { BASE_URL } from './env.js';
import { MealHistoryPage } from './pages/MealHistory/MealHistory.js';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path={BASE_URL} component={Generator} />
					<Route path={`${BASE_URL}/obiady`} component={Meals} />
					<Route path={`${BASE_URL}/historia`} component={MealHistoryPage} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
