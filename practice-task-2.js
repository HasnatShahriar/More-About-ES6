//   Task -01
//  you have an odd array [1, 3, 5, 7, 9].Now convert this array into an even array[2, 4, 6, 8, 10].
//  using for loop & array.map()


// using for loop

const array = [1, 3, 5, 7, 9];
let newArray = [];
for (const element of array) {
  const element2 = element + 1;
  newArray.push(element2)
}
console.log(newArray);


// using array.map()
const array2 = [1, 3, 5, 7, 9];
const newArray2 = array2.map(element => element + 1);
console.log(newArray2);


/**
 * Task -02
 * You have an array [33, 50, 79, 78, 90, 101, 30].Now return all the elements which are divisible by 10 by using array.filter()
 * 
 */

const numbers = [33, 50, 79, 78, 90, 101, 30];
const newNumbers = numbers.filter(prop => prop % 10 === 0);
console.log(newNumbers);
const newNumbers2 = numbers.find(p => p % 10 === 0);
console.log(newNumbers2);


/**
 * Task -03
 *  You have an array of objects :
 *  const instructor = [
 *    {name : 'Linkcon', age : 26, position : 'junior'},
 *    {name : 'gias', age : 30, position : 'senior'},
 *    {name : 'rokib', age : 32, position : 'senior'}
 *  ]
 * 
 * The task is find out the instructor name that has the position senior.
 */

const instructor = [
  { name: 'Linkcon', age: 26, position: 'junior' },
  { name: 'gias', age: 30, position: 'senior' },
  { name: 'rokib', age: 32, position: 'senior' }
]

const seniors = instructor.filter(n => n.position === 'senior');
console.log(seniors);

const seniorsName = seniors.map(p => p.name);
console.log(seniorsName);


/**
 * Task-04
 *    const people = [
 *      {name: 'Hasnat', age: 30},
 *      {name: 'Maria', age: 21},
 *      {name: 'Alhaz', age: 23},
 *      
 *    ];
 *  
 * 
 * find the total sum of the age...using for loop & array.reduce()
 * 
 * 
 */


// using for of loop
const people = [
  { name: 'Hasnat', age: 30 },
  { name: 'Maria', age: 21 },
  { name: 'Alhaz', age: 23 },

];
let sum = 0;
for (const man of people) {
  // console.log(man.age);
  sum += man.age;
  
}
console.log(sum);


// using array.reduce()
const people2 = [
  { name: 'Hasnat', age: 30 },
  { name: 'Maria', age: 21 },
  { name: 'Alhaz', age: 23 },

];
const totalAge = people2.reduce((p, c) => p + c.age, 0);
console.log(totalAge);