import { MealHistorySingleton } from "./mealHistory";
import { Meal, getMeals } from "./meals";

const BINDING_TAGS = ['kurczak', 'indyk', 'rukola'];

const meals: Meal[] = getMeals();
const mealHistory = MealHistorySingleton.getInstance();
const rejectedIds: string[] = [];
const logObj = {};

const getRandomMeal = (choices: Meal[]): Meal => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

export const suggestMeal = (): Meal => {
    if (mealHistory.getHistory().length === 0) {
        const meal = getRandomMeal(meals);
        return meal;
    }
    console.log(logObj);
    return getHeuristicChoice();
}

const getRecentMeals = (n: number): Meal[] => {
    const history = mealHistory.getHistory();
    logObj['history'] = history;
    if (history.length < n) {
        return history.map(mealId => meals.find(meal => meal.id === mealId)) as Meal[];
    }
    return history.slice(-n)
        .map(mealId => meals.find(meal => meal.id === mealId)) as Meal[];
}

const getBindingTagSuggestions = (recentMeals: Meal[]): Meal[] => {
    const lastMeal = recentMeals[recentMeals.length - 1];
    let suggestions: Meal[] = [];
    BINDING_TAGS.forEach(tag => {
        if (lastMeal.tags.includes(tag) &&
            !(recentMeals.length > 1 &&
                recentMeals[recentMeals.length - 2].tags.includes(tag))) {
            suggestions = [...suggestions,
            ...meals.filter(meal => meal.tags.includes(tag)
                && meal.id !== lastMeal.id)];
        }
    });
    return suggestions;
}

const getHeuristicChoice = (): Meal => {
    const recentMeals = getRecentMeals(4);
    logObj['recentMeals'] = recentMeals;
    let filteredMeals: Meal[] = getBindingTagSuggestions(recentMeals);
    filteredMeals = filteredMeals.filter(meal => !rejectedIds.includes(meal.id));
    logObj['filteredMeals'] = filteredMeals;
    if (filteredMeals.length !== 0) {
        return getRandomMeal(filteredMeals);
    }

    let choices = meals.filter(meal =>
        !rejectedIds.includes(meal.id) && !recentMeals.includes(meal));
    if (choices.length === 0) {
        choices = meals.filter(meal => !recentMeals.includes(meal));
    }
    const meal = getRandomMeal(choices);
    return meal;
}

export const mealAccepted = (id: string): void => {
    mealHistory.pushToHistory(id);
}

export const mealRejected = (id: string): void => {
    rejectedIds.push(id);
    logObj['rejectedIds'] = rejectedIds;
}