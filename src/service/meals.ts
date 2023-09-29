import { mealsTsv } from "../assets/mealsTsv";

export type Meal = {
    id: string,
    name: string,
    tags: string[],
}

const mealsList: Meal[] = []

export const getMeals = (): Meal[] => {
    if (mealsList.length > 0) {
        return mealsList;
    }

    const table = mealsTsv.split('\n').slice(2, -1);
    table.forEach(row => {
        const columns = row.split('\t');
        const id = columns[0];
        const name = columns[1];
        const tags = columns[2].split(',').map(tag => tag.trim().toLowerCase());
        mealsList.push({ id: id, name: name, tags: tags });
    });

    return mealsList;
}