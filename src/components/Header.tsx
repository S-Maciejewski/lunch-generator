import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Generator
				</a>
				<a href="/obiady" class={url == '/obiady' && 'active'}>
					Obiady
				</a>
				{/* <a href="/404" class={url == '/404' && 'active'}>
					404
				</a> */}
			</nav>
		</header>
	);
}
