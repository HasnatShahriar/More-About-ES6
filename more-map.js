//do double

const numbers = [34, 56, 74, 75, 7, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);



// do five add 

const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);



// do square

const square = numbers.map(n => n * n);
console.log(square);


// find length 

const places = ['kalihati', 'tangail', 'dhaka', 'ratangonj'];
const length = places.map(place => place.length);
console.log(length);

// find first letter 

const firstLetter = places.map(x => x[0]);
console.log(firstLetter);