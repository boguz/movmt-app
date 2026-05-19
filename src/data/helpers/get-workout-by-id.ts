import { workouts } from '../workouts';

export function getWorkoutById(
  id: string
) {
  return workouts.find(
    workout => workout.id === id
  );
}