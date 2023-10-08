import { MealsTable } from '../../components/MealsTable/MealsTable';
import { Meal, getMeals } from '../../service/meals';
import './style.scss';


export function Meals() {
	let meals: Meal[] = getMeals();
	return (
		<div class="meals">
			Lista obiadów
			<MealsTable meals={meals} />
		</div>
	);
}

