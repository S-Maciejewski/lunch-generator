import { MealHistorySingleton } from "./mealHistory";
import { Meal, getMeals } from "./meals";


const meals: Meal[] = getMeals();
const mealHistory = MealHistorySingleton.getInstance();

const getRandomMeal = (choices: Meal[]): Meal => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

export const suggestMeal = (): Meal => {
    if (mealHistory.getHistory().length === 0) {
        const meal = getRandomMeal(meals);
        return meal;
    }

}

export const mealAccepted = (id: string): void => {
    mealHistory.pushToHistory(id);
}
