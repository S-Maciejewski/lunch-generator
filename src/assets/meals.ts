const mealsTsv: string = `
id	name	tags
1	Dorsz w sosie pomidorowym z ryżem	ryba,ryż
2	Zupa krem z cukini z grzankami z mozarellą	zupa,ciepłe
3	Zupa krem pomidorowy z makaronem orzo	zupa,ciepłe
4	Makaron z sosem z pieczonej papryki (Cheetos)	makaron
`
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
        const tags = columns[2].split(',');
        mealsList.push({ id: id, name: name, tags: tags });
    });

    return mealsList;
}