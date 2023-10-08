import { useEffect, useState } from 'preact/hooks';
import { MealsTable } from '../../components/MealsTable/MealsTable';
import { Meal, getMeals } from '../../service/meals';
import { StateSingleton } from '../../service/stateSingleton';
import './style.scss';


export function MealHistoryPage() {
    const state = StateSingleton.getInstance();
    const meals: Meal[] = getMeals();
    const [mealHistory, setMealHistory] = useState([] as Meal[]);

    const handleClearHistory = () => {
        state.clearHistory();
        setMealHistory([]);
    }

    useEffect(() => {
        setMealHistory(state.getHistory().map((id) => meals.find(m => m.id === id)).reverse());
    }, []);


    return (
        <div>
            <div class="history">
                Historia obiadów, od najnowszych
                <MealsTable meals={mealHistory} />
            </div>
            <div class='clear-history'>
                <button class='button' onClick={handleClearHistory}>
                    Wyczyść historię
                </button>
            </div>
        </div>

    );
}