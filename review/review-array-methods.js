// forEach()
let studentsArr = [
  { name: "Adam", avgGrade: 88 },
  { name: "John", avgGrade: 89 },
  { name: "Adrien", avgGrade: 93 },
  { name: "Patrick", avgGrade: 77 },
];

/* studentsArr.forEach(student => {
  student.avgGrade = parseInt(student.avgGrade);
  console.log(student.avgGrade);
}); */

// filter()
// longform filter()
// let filteredStudents = studentsArr.filter(student => {
// 	if(student.avgGrade >= 80){
//     return true;
//   }
//   return false;
// });

//shortform filter()
let filteredStudents = studentsArr.filter(student => student.avgGrade >= 80);

console.log(filteredStudents);


// reduce()
// map()