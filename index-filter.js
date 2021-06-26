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

function getNamesOfPassingStudents(students) {
	const passingStudents = students.filter(
		(student) => student.grade >= passingScore
	);

	const namesOfPassingStudents = passingStudents.map((student) => student.name);

	return namesOfPassingStudents;
}

console.log(getNamesOfPassingStudents(students));
