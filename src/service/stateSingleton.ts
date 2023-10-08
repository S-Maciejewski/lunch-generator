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

    private saveState(): void {
        sessionStorage.setItem('stateObj', JSON.stringify(this.stateObj));
    }

    getHistory(): string[] {
        return this.stateObj['history'] || [];
    }

    getStateObj(): {} {
        return this.stateObj;
    }

    pushToHistory(id: string): void {
        this.stateObj['history'].push(id);
        this.saveState();
    }

    clearHistory(): void {
        this.stateObj['history'] = [];
        this.saveState();
    }

    updateState(key: string, value: any): void {
        this.stateObj[key] = value;
        this.saveState();
    }
}