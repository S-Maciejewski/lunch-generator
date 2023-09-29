import { Meal, getMeals } from '../../service/meals';
import './style.scss';


export function Meals() {
	let meals = getMeals();
	return (
		<div class="meals">
			Lista obiadów
			{getMealsTable(meals)}
		</div>
	);
}

export const getMealsTable = (meals: Meal[]) => {
	return (
		<table>
				<thead>
					<tr>
						<th>Nazwa</th>
						<th>Tagi</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(meals).map((id) => (
						<tr>
							<td>{meals[id].name}</td>
							<td>{meals[id].tags.join(', ')}</td>
						</tr>
					))}
				</tbody>
			</table>
	)
}