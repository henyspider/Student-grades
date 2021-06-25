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

function isPassingStudent(student) {
	return student.grade >= passingScore;
}

const passingStudents = students.filter(isPassingStudent);

function getNamesOfPassingStudents(student) {
	return student.name;
}

const namesOfPassingStudents = passingStudents.map(getNamesOfPassingStudents);

console.log(namesOfPassingStudents);
