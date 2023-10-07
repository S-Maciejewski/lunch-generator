import { Meal } from "./meals";

export type State = {
    history: string[],
    recentMeals: Meal[],
    filteredMeals: Meal[],
    rejectedIds: string[],
}

export class StateSingleton {
    private static instance: StateSingleton;

    stateObj: State;

    private constructor() {
        // this.ids = JSON.parse(sessionStorage.getItem('mealHistory')) || [];
        this.stateObj = JSON.parse(sessionStorage.getItem('stateObj')) || {
            history: [],
            recentMeals: [],
            filteredMeals: [],
            rejectedIds: [],
        };
    }

    static getInstance(): StateSingleton {
        if (!StateSingleton.instance) {
            StateSingleton.instance = new StateSingleton();
        }

        return StateSingleton.instance;
    }

    getHistory(): string[] {
        return this.stateObj['history'] || [];
    }

    getStateObj(): {} {
        return this.stateObj;
    }

    pushToHistory(id: string): void {
        this.stateObj['history'].push(id);
        // sessionStorage.setItem('mealHistory', JSON.stringify(this.ids));
        sessionStorage.setItem('stateObj', JSON.stringify(this.stateObj));
    }

    updateState(key: string, value: any): void {
        this.stateObj[key] = value;
        sessionStorage.setItem('stateObj', JSON.stringify(this.stateObj));
    }
}