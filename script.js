//Zadanie 1//

const one = `Hello`;
const two = `World`;

console.log(`${one} ${two}`);

//Zadanie 2//
   
const multiply = (x=1, y=x) => console.log(`${x}` * `${y}`);

multiply();     
multiply(6);   
multiply(2, 4);

//Zadanie 3//

const average = (array) => array.reduce((x, y) => x + y) / array.length;

console.log(average([1,2,3,4,5]));
console.log(average([1, 3, 8]));

//Zadanie 4//

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const averageGrades = ((...grade) => grade.reduce((x,y) => x+y))(...grades)/grades.length;
console.log(averageGrades);

//Zadanie 5//

const data = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstname, ,lastname] = data;

console.log(firstname, lastname);