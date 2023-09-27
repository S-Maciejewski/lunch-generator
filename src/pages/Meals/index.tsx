import './style.scss';
import { getMeals } from '../../assets/meals';

export function Meals() {
	let meals = getMeals();
	return (
		<div class="meals">
			obiady
			<li>
				{Object.keys(meals).map((id) => (
					<p>
						{meals[id].name} - {meals[id].tags}
					</p>
				))}
			</li>
		</div>
	);
}
