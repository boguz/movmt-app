import type { Exercise } from "./types";

export const exercises: Exercise[] = [
	{
		id: "neck-rolls",
		name: "Neck Rolls",
		categories: ["neck", "stretch"],
		difficulty: "easy",
		energy: "calm",
		illustration: {
			light: "/assets/exercises/neck-rolls.svg",
		},
		instructions: [
			"Sit or stand upright.",
			"Slowly roll your neck in a circular motion.",
			"Repeat in both directions.",
		],
	},
	{
		id: "shoulder-rolls",
		name: "Shoulder Rolls",
		categories: ["shoulders", "mobility"],
		difficulty: "easy",
		energy: "neutral",
		illustration: {
			light: "/assets/exercises/shoulder-rolls.svg",
		},
		instructions: [
			"Lift your shoulders upward.",
			"Roll them backward slowly.",
			"Repeat several times.",
		],
	},
	{
		id: "shoulder-stretch",
		name: "Shoulder Stretch",
		categories: ["shoulders", "stretch"],
		difficulty: "easy",
		energy: "calm",
		illustration: {
			light: "/assets/exercises/shoulder-stretch.svg",
		},
		instructions: [
			"Bring one arm across your chest.",
			"Hold it gently with the opposite arm.",
			"Switch sides.",
		],
	},
	{
		id: "neck-side-stretch",
		name: "Neck Side Stretch",
		categories: ["neck", "stretch"],
		difficulty: "easy",
		energy: "calm",
		illustration: {
			light: "/assets/exercises/neck-side-stretch.svg",
		},
		instructions: [
			"Tilt your head toward one shoulder.",
			"Hold gently.",
			"Repeat on the other side.",
		],
	},
	{
		id: "seated-spinal-twist",
		name: "Seated Spinal Twist",
		categories: ["back", "mobility"],
		difficulty: "easy",
		energy: "neutral",
		illustration: {
			light: "/assets/exercises/seated-spinal-twist.svg",
		},
		instructions: [
			"Sit upright.",
			"Twist your upper body gently to one side.",
			"Repeat on the opposite side.",
		],
	},
	{
		id: "standing-back-extension",
		name: "Standing Back Extension",
		categories: ["back", "stretch"],
		difficulty: "easy",
		energy: "energizing",
		illustration: {
			light: "/assets/exercises/standing-back-extension.svg",
		},
		instructions: [
			"Stand upright with hands on hips.",
			"Gently arch backward.",
			"Hold briefly and return.",
		],
	},
	{
		id: "cat-cow-stretch",
		name: "Cat-Cow Stretch",
		categories: ["back", "mobility"],
		difficulty: "easy",
		energy: "neutral",
		illustration: {
			light: "/assets/exercises/cat-cow-stretch.svg",
		},
		instructions: [
			"Round your back gently.",
			"Then open your chest and arch slightly.",
			"Repeat slowly.",
		],
	},
	{
		id: "chest-opener",
		name: "Chest Opener",
		categories: ["stretch", "shoulders"],
		difficulty: "easy",
		energy: "energizing",
		illustration: {
			light: "/assets/exercises/chest-opener.svg",
		},
		instructions: [
			"Clasp your hands behind your back.",
			"Open your chest.",
			"Lift gently.",
		],
	},
	{
		id: "wrist-stretch",
		name: "Wrist Stretch",
		categories: ["wrists", "stretch"],
		difficulty: "easy",
		energy: "calm",
		illustration: {
			light: "/assets/exercises/wrist-stretch.svg",
		},
		instructions: [
			"Extend one arm forward.",
			"Pull fingers gently downward.",
			"Switch sides.",
		],
	},
	{
		id: "finger-stretch",
		name: "Finger Stretch",
		categories: ["wrists", "mobility"],
		difficulty: "easy",
		energy: "neutral",
		illustration: {
			light: "/assets/exercises/finger-stretch.svg",
		},
		instructions: [
			"Spread your fingers wide.",
			"Hold briefly.",
			"Relax and repeat.",
		],
	},
	{
		id: "arm-reach",
		name: "Arm Reach",
		categories: ["arms", "stretch"],
		difficulty: "easy",
		energy: "energizing",
		illustration: {
			light: "/assets/exercises/arm-reach.svg",
		},
		instructions: [
			"Reach both arms overhead.",
			"Stretch upward.",
			"Lean gently side to side.",
		],
	},
	{
		id: "calf-raises",
		name: "Calf Raises",
		categories: ["legs", "mobility"],
		difficulty: "easy",
		energy: "energizing",
		illustration: {
			light: "/assets/exercises/calf-raises.svg",
		},
		instructions: [
			"Stand upright.",
			"Lift onto your toes.",
			"Lower slowly and repeat.",
		],
	},
	{
		id: "march-in-place",
		name: "March in Place",
		categories: ["legs", "mobility"],
		difficulty: "easy",
		energy: "energizing",
		illustration: {
			light: "/assets/exercises/march-in-place.svg",
		},
		instructions: [
			"Stand upright.",
			"March gently in place.",
			"Swing your arms naturally.",
		],
	},
	{
		id: "standing-quad-stretch",
		name: "Standing Quad Stretch",
		categories: ["legs", "stretch"],
		difficulty: "easy",
		energy: "neutral",
		illustration: {
			light: "/assets/exercises/standing-quad-stretch.svg",
		},
		instructions: [
			"Stand on one leg.",
			"Pull the opposite foot toward your glutes.",
			"Switch sides.",
		],
	},
	{
		id: "deep-breathing",
		name: "Deep Breathing",
		categories: ["breathing"],
		difficulty: "easy",
		energy: "calm",
		illustration: {
			light: "/assets/exercises/deep-breathing.svg",
		},
		instructions: [
			"Inhale slowly through your nose.",
			"Exhale gently.",
			"Repeat several times.",
		],
	},
	{
		id: "eye-focus-reset",
		name: "Eye Focus Reset",
		categories: ["breathing", "mobility"],
		difficulty: "easy",
		energy: "calm",
		illustration: {
			light: "/assets/exercises/eye-focus-reset.svg",
		},
		instructions: [
			"Look away from your screen.",
			"Focus on a distant object.",
			"Blink slowly several times.",
		],
	},
	{
		id: "chin-tucks",
		name: "Chin Tucks",
		categories: ["neck", "mobility"],
		difficulty: "easy",
		energy: "calm",
		illustration: {
			light: "/assets/exercises/chin-tucks.svg",
		},
		instructions: [
			"Sit upright.",
			"Pull your chin gently backward.",
			"Hold briefly and release.",
		],
	},
	{
		id: "torso-reach",
		name: "Torso Reach",
		categories: ["back", "stretch"],
		difficulty: "easy",
		energy: "neutral",
		illustration: {
			light: "/assets/exercises/torso-reach.svg",
		},
		instructions: [
			"Raise one arm overhead.",
			"Reach gently to the side.",
			"Switch sides.",
		],
	},
	{
		id: "ankle-rolls",
		name: "Ankle Rolls",
		categories: ["legs", "mobility"],
		difficulty: "easy",
		energy: "neutral",
		illustration: {
			light: "/assets/exercises/ankle-rolls.svg",
		},
		instructions: [
			"Lift one foot slightly.",
			"Rotate your ankle slowly.",
			"Switch directions and sides.",
		],
	},
	{
		id: "seated-forward-fold",
		name: "Seated Forward Fold",
		categories: ["back", "stretch"],
		difficulty: "easy",
		energy: "calm",
		illustration: {
			light: "/assets/exercises/seated-forward-fold.svg",
		},
		instructions: [
			"Sit upright.",
			"Fold gently forward.",
			"Relax your shoulders and neck.",
		],
	},
	{
		id: "shake-out",
		name: "Shake Out",
		categories: ["arms", "mobility"],
		difficulty: "easy",
		energy: "energizing",
		illustration: {
			light: "/assets/exercises/shake-out.svg",
		},
		instructions: [
			"Shake your arms loosely.",
			"Relax your shoulders.",
			"Breathe naturally.",
		],
	},
	{
		id: "side-steps",
		name: "Side Steps",
		categories: ["legs", "mobility"],
		difficulty: "easy",
		energy: "energizing",
		illustration: {
			light: "/assets/exercises/side-steps.svg",
		},
		instructions: [
			"Step side to side slowly.",
			"Keep your posture upright.",
			"Swing your arms naturally.",
		],
	},
];
