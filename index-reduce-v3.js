const students = [
	{
		name: "Peyton",
		grade: 47,
	},
	{
		name: "Emily",
		grade: 56,
	},
	{
		name: "Claus",
		grade: 35,
	},
	{
		name: "Nelly",
		grade: 72,
	},
	{
		name: "Brandon",
		grade: 80,
	},
	{
		name: "Trent",
		grade: 79,
	},
	{
		name: "Chris",
		grade: 61,
	},
	{
		name: "James",
		grade: 60,
	},
	{
		name: "Alex",
		grade: 86,
	},
	{
		name: "Khloe",
		grade: 97,
	},
];

const passingScore = 60;
const highestScore = (scoreA, scoreB) => Math.max(scoreA, scoreB);

const getTheHighestScore = students
	.filter((student) => student.grade >= passingScore)
	.map((student) => student.grade)
	.reduce(highestScore);

const getNameOfHighestScoreStudent = students
	.filter((student) => student.grade >= getTheHighestScore)
	.map((student) => student.name);

console.log(
	`The student with the highest score is: ${getNameOfHighestScoreStudent}, with a score of ${getTheHighestScore}`
);
