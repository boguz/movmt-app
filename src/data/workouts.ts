import type { Workout } from "./types";
import { WorkoutType } from "./types";

export const workouts: Workout[] = [
	{
		id: "quick-reset",
		name: "Quick Reset",
		type: WorkoutType.STRETCH,
		description: "A short reset to refresh your body and mind.",
		categories: ["stretch", "mobility"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "shoulder-rolls",
				duration: 30,
				order: 1,
			},
			{
				exerciseId: "neck-side-stretch",
				duration: 30,
				order: 2,
			},
			{
				exerciseId: "wrist-stretch",
				duration: 30,
				order: 3,
			},
			{
				exerciseId: "deep-breathing",
				duration: 45,
				order: 4,
			},
		],
	},
	{
		id: "posture-reset",
		name: "Posture Reset",
		type: WorkoutType.MOBILITY,
		description: "Release tension from sitting and improve posture.",
		categories: ["back", "stretch", "shoulders"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "chest-opener",
				duration: 40,
				order: 1,
			},
			{
				exerciseId: "standing-back-extension",
				duration: 30,
				order: 2,
			},
			{
				exerciseId: "cat-cow-stretch",
				duration: 45,
				order: 3,
			},
			{
				exerciseId: "shoulder-stretch",
				duration: 40,
				order: 4,
			},
		],
	},
	{
		id: "energy-boost",
		name: "Energy Boost",
		type: WorkoutType.ENERGY,
		description: "A quick movement routine to wake up your body.",
		categories: ["legs", "mobility"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "march-in-place",
				duration: 45,
				order: 1,
			},
			{
				exerciseId: "calf-raises",
				duration: 40,
				order: 2,
			},
			{
				exerciseId: "arm-reach",
				duration: 30,
				order: 3,
			},
			{
				exerciseId: "deep-breathing",
				duration: 30,
				order: 4,
			},
		],
	},
	{
		id: "wrist-relief",
		name: "Wrist Relief",
		type: WorkoutType.STRETCH,
		description: "Reduce wrist and hand tension from computer work.",
		categories: ["wrists", "stretch"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "finger-stretch",
				duration: 30,
				order: 1,
			},
			{
				exerciseId: "wrist-stretch",
				duration: 45,
				order: 2,
			},
			{
				exerciseId: "arm-reach",
				duration: 30,
				order: 3,
			},
		],
	},
	{
		id: "calm-reset",
		name: "Calm Reset",
		type: WorkoutType.RELAX,
		description: "Slow down, breathe, and release tension.",
		categories: ["breathing", "stretch"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "deep-breathing",
				duration: 60,
				order: 1,
			},
			{
				exerciseId: "neck-rolls",
				duration: 40,
				order: 2,
			},
			{
				exerciseId: "shoulder-rolls",
				duration: 40,
				order: 3,
			},
			{
				exerciseId: "eye-focus-reset",
				duration: 30,
				order: 4,
			},
		],
	},
	{
		id: "full-body-reset",
		name: "Full Body Reset",
		type: WorkoutType.MOBILITY,
		description: "A balanced full-body movement break.",
		categories: ["stretch", "mobility", "legs", "back"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "march-in-place",
				duration: 45,
				order: 1,
			},
			{
				exerciseId: "cat-cow-stretch",
				duration: 45,
				order: 2,
			},
			{
				exerciseId: "standing-quad-stretch",
				duration: 40,
				order: 3,
			},
			{
				exerciseId: "chest-opener",
				duration: 40,
				order: 4,
			},
			{
				exerciseId: "deep-breathing",
				duration: 45,
				order: 5,
			},
		],
	},
	{
		id: "eye-relief",
		name: "Eye Relief",
		type: WorkoutType.EYES,
		description: "Reduce eye strain and mental fatigue.",
		categories: ["breathing", "mobility"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "eye-focus-reset",
				duration: 45,
				order: 1,
			},
			{
				exerciseId: "deep-breathing",
				duration: 45,
				order: 2,
			},
			{
				exerciseId: "neck-rolls",
				duration: 30,
				order: 3,
			},
		],
	},
	{
		id: "morning-mobility",
		name: "Morning Mobility",
		type: WorkoutType.MOBILITY,
		description: "Wake up your body with gentle movement.",
		categories: ["mobility", "stretch"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "shoulder-rolls",
				duration: 30,
				order: 1,
			},
			{
				exerciseId: "torso-reach",
				duration: 40,
				order: 2,
			},
			{
				exerciseId: "ankle-rolls",
				duration: 30,
				order: 3,
			},
			{
				exerciseId: "march-in-place",
				duration: 45,
				order: 4,
			},
		],
	},
	{
		id: "desk-recovery",
		name: "Desk Recovery",
		type: WorkoutType.RELAX,
		description: "Release tension from long desk sessions.",
		categories: ["stretch", "breathing", "back"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "seated-forward-fold",
				duration: 45,
				order: 1,
			},
			{
				exerciseId: "neck-side-stretch",
				duration: 40,
				order: 2,
			},
			{
				exerciseId: "deep-breathing",
				duration: 60,
				order: 3,
			},
		],
	},
	{
		id: "midday-recharge",
		name: "Midday Recharge",
		type: WorkoutType.ENERGY,
		description: "Boost your energy during the day.",
		categories: ["legs", "mobility"],
		difficulty: "easy",
		exercises: [
			{
				exerciseId: "side-steps",
				duration: 45,
				order: 1,
			},
			{
				exerciseId: "shake-out",
				duration: 30,
				order: 2,
			},
			{
				exerciseId: "calf-raises",
				duration: 40,
				order: 3,
			},
		],
	},
];
