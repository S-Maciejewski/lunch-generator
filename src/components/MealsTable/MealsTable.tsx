import { Meal } from "../../service/meals"
import './style.scss'


export const MealsTable = (props: { meals: Meal[] }) => {
	return (
		<table class='mealsTable'>
			<thead>
				<tr>
					<th>Nazwa</th>
					<th>Tagi</th>
				</tr>
			</thead>
			<tbody>
				{Object.keys(props.meals).map((id) => (
					<tr>
						<td>{props.meals[id].name}</td>
						<td>{props.meals[id].tags.join(', ')}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}