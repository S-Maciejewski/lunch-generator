import { suggestMeal } from '../../service/randomGenerator';
import './style.scss';

export function Generator() {
	return (
		<div class="generator">
			Generator obiadów
			<p>
				Czy masz ochotę na...
			</p>
			<p>
				{suggestMeal().name}
			</p>
			{/* TODO: akceptowanie / odrzucanie wyboru */}
		</div>
	);
}
