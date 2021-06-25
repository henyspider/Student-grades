const students = [
    {
        name : "Peyton",
        grade : 47
    },
    {
        name : "Emily",
        grade : 56
    },
    {
        name : "Claus",
        grade : 35
    },
    {
        name : "Nelly",
        grade : 72
    },
    {
        name : "Brandon",
        grade : 80
    },
    {
        name : "Trent",
        grade : 79
    },
    {
        name : "Chris",
        grade : 61
    },
    {
        name : "James",
        grade : 60
    },
    {
        name : "Alex",
        grade : 86
    },
    {
        name : "Khloe",
        grade : 97
    }
]

const passingScore = 60;

function getPassingStudents (arr){

    let passingStudents = [];

    for (const obj of arr){

        if (obj.grade >= passingScore){
            passingStudents.push(obj.name)
        }
    }

    return passingStudents
}

console.log(getPassingStudents(students));
