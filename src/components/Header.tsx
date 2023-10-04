import { useLocation } from 'preact-iso';
import { BASE_URL } from '../env.js';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href={BASE_URL} class={url == BASE_URL && 'active'}>
					Generator
				</a>
				<a href={`${BASE_URL}/obiady`} class={url == `${BASE_URL}/obiady` && 'active'}>
					Obiady
				</a>
				{/* <a href="/404" class={url == '/404' && 'active'}>
					404
				</a> */}
			</nav>
		</header>
	);
}
