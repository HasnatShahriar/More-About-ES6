const products = [
  {id : 1, name : 'hp', price : 39500},
  {id : 2, name : 'apple', price : 120000},
  {id : 3, name : 'dell', price : 46500},
  {id : 4, name : 'walton', price : 29500}
]

// find out the products name by using map()
const nameProducts = products.map(product => product.name);
console.log(nameProducts);

// find out the products price by using map()
const priceProducts = products.map(p => p.price);
console.log(priceProducts);

// just see the id of products by using the forEach()
products.forEach(n => console.log(n.id));

// find out the products that's price are above of 50k
const expensiveProducts = products.filter(product => product.price > 50000);
console.log(expensiveProducts);

// find - first product under 50k 
const affordableProduct = products.find(p => p.price < 50000);
console.log(affordableProduct);