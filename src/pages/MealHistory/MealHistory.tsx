import { MealsTable } from '../../components/MealsTable/MealsTable';
import { Meal, getMeals } from '../../service/meals';
import { StateSingleton } from '../../service/stateSingleton';
import './style.scss';


export function MealHistoryPage() {
    const state = StateSingleton.getInstance();
    const meals: Meal[] = getMeals();
    let mealsHistory = state.getHistory().map((id) => meals.find(m => m.id === id)).reverse();
    console.log(mealsHistory);
    return (
        <div class="history">
            Historia obiadów, od najnowszych
            <MealsTable meals={mealsHistory} />
        </div>
    );
}