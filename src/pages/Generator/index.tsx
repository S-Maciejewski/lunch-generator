import { useEffect, useState } from 'preact/hooks';
import { mealAccepted, suggestMeal } from '../../service/randomGenerator';
import './style.scss';
import { Meal } from '../../service/meals';

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
		setMeal(suggestMeal());
	}

	const handleNew = () => {
		setMeal(suggestMeal());
		setAccepted(false);
		console.log('new', accepted)
	}

	return (
		<div class="generator">
			Generator obiadów
			<p>
				Czy masz ochotę na...
			</p>
			<p>
				{meal.name}
			</p>
			{
				!accepted &&
				<div class="controls">
					<button class="button" onClick={handleAccept}>
						Tak
					</button>
					<button class="button" onClick={handleReject}>
						Nie
					</button>
				</div>
			}
			{
				accepted &&
				<div>
					<p>
						Smacznego! Dodano do listy obiadów.
					</p>
					<div class="controls">
						<button class="button" onClick={handleNew}>
							Następny
						</button>
					</div>
				</div>

			}
		</div>
	);
}
