let studentList = [
    { name: "Ion", marks: [8, 7, 6, 5, 8] },
    { name: "Adrian", marks: [9, 8, 8, 7, 8] },
    { name: "Andrei", marks: [6, 8, 9, 7, 7] },
    { name: "Marin", marks: [4, 5, 5, 6, 4] },
    { name: "Alexandru", marks: [10, 9, 9, 8, 10] },
    { name: "Maxim", marks: [4, 5, 7, 7, 6] }
]

let averages = studentList.map(s => ({
    name: s.name,
    avg: s.marks.reduce((item, index) => item + index) / s.marks.length
}));
console.log(averages);

let resultAvg = averages.filter(item => item.avg < 5); //In comparatie cu "find" care returneaza doar primul element gasit, "filter" returneaza toate obiectele 
console.log('Studenti cu nota medie mai mica ca 5:', resultAvg)

let [max] = studentList;
let maxAvg = Math.max(...studentList.map(item => item.marks));
console.log(`Studentul cu nota media cea mai mare este ${max.name} cu media ${max.marks}`);

let [min] = studentList;
Math.min(...studentList.map(item => item.marks));
console.log(`Studentul cu nota medie minima ${min.name}`)

let avgSort = averages;
console.log(avgSort.sort((item, index) => index.avg - item.avg));