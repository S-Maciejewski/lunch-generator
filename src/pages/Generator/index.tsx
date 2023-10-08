import { useEffect, useState } from 'preact/hooks';
import { getRecentMeals, mealAccepted, mealRejected, suggestMeal } from '../../service/heuristicGenerator';
import './style.scss';
import { Meal } from '../../service/meals';
import { MealsTable } from '../../components/MealsTable/MealsTable';

export function Generator() {
	const [meal, setMeal] = useState({} as Meal);
	const [accepted, setAccepted] = useState(false);

	useEffect(() => {
		setMeal(suggestMeal());
		setAccepted(false);
	}, []);

	const handleAccept = () => {
		mealAccepted(meal.id);
		setAccepted(true);
	}

	const handleReject = () => {
		mealRejected(meal.id);
		setMeal(suggestMeal());
	}

	const handleNew = () => {
		setAccepted(false);
		setMeal(suggestMeal());
	}

	return (
		<div>

			<div class="generator-container">
				Generator obiadów
				{
					!accepted &&
					<div class="generator">
						<p>
							Czy masz ochotę na...
						</p>
						<p>
							{meal.name}
						</p>
						<div class="controls">
							<button class="button" onClick={handleAccept}>
								Tak
							</button>
							<button class="button" onClick={handleReject}>
								Nie
							</button>
						</div>
					</div>
				}
				{
					accepted &&
					<div>
						<p>
							Smacznego!
						</p>
						<p>
							Dodano {meal.name} do listy obiadów.
						</p>
						<div class="controls">
							<button class="button" onClick={handleNew}>
								Następny
							</button>
						</div>
					</div>
				}
			</div>
			<div class="recent-history-container">
				<p>
					Ostatnie obiady, od najnowszego
				</p>
				<div class="recent-history">
					<MealsTable meals={getRecentMeals(4).reverse()} />
				</div>
			</div>
		</div>

	);
}
