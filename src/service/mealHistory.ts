import { Meal, getMeals } from "./meals";


export class MealHistorySingleton {
    private static instance: MealHistorySingleton;
    
    ids: string[]

    private constructor() {
        // TODO: Store in session
        this.ids = [];
    }

    static getInstance(): MealHistorySingleton {
        if (!MealHistorySingleton.instance) {
            MealHistorySingleton.instance = new MealHistorySingleton();
        }

        return MealHistorySingleton.instance;
    }

    getHistory(): string[] {
        return this.ids;
    }

    pushToHistory(id: string): void {
        this.ids.push(id);
    }
}