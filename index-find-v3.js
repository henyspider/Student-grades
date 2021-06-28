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

function findStudentByName(studentName) {
	for (const student of students) {
		if (student.name == studentName) {
			return student;
		}
	}
	return null;
}

function findIndexOfStudentByName(studentName) {
	for (const student of students) {
		if (student.name == studentName) {
			return students.indexOf(student);
		}
	}
	return -1;
}

console.log(findStudentByName("Alex"), findIndexOfStudentByName("Alex")); //{name: 'Alex', grade: 86} 8
