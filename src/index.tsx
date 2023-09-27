import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Generator } from './pages/Generator/index.js';
import { NotFound } from './pages/_404.jsx';
import './style.scss';
import { Meals } from './pages/Meals/index.js';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Generator} />
					<Route path="/obiady" component={Meals} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
