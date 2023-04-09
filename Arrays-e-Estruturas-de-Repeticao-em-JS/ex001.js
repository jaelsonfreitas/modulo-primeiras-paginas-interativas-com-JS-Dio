
const grades = [];

grades.push(5);
grades.push(7);
grades.push(8);
grades.push(7.3);
grades.push(6.7);
grades.push(8);

let sum = 0

for (let index = 0; index < grades.length; index++) {
    const element = grades[index];
    sum = sum + element;
}

const average = sum / grades.length;
console.log(average);