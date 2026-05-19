export type Difficulty = "easy" | "medium" | "hard";

export enum WorkoutType {
    STRETCH = 'stretch',
    BREATHING = 'breathing',
    EYES = 'eyes',
    STRENGTH = 'strength',
    MOBILITY = 'mobility',
    RELAX = 'relax',
    ENERGY = 'energy'
}

export type ExerciseCategory =
	| "neck"
	| "shoulders"
	| "back"
	| "arms"
	| "legs"
	| "wrists"
	| "stretch"
	| "mobility"
	| "breathing";

export type ExerciseEnergy =
  | 'calm'
  | 'neutral'
  | 'energizing';

export type Exercise = {
	id: string;
	name: string;
	description?: string;
	categories: ExerciseCategory[];
	difficulty: Difficulty;
    energy: ExerciseEnergy;
	illustration: {
		light: string;
		dark?: string;
	};
	instructions?: string[];
};

export type WorkoutExercise = {
	exerciseId: string;
	duration: number;
	order: number;
	restAfter?: number;
};

export type Workout = {
	id: string;
	name: string;
    type: WorkoutType;
	description?: string;
	categories: ExerciseCategory[];
	difficulty: Difficulty;
	exercises: WorkoutExercise[];
};
