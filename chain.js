const data = [{ id: 1, name: 'Shahriar', address: 'Ratangonj' }];
// console.log(data[0].address);


const products = {
  count: 5000,
  data: [
    { id: 1, name: 'hp', price: 39500 },
    { id: 1, name: 'Apple', price: 140500 },
    { id: 1, name: 'Lenovo', price: 65500 },

  ]
}
//  find the price of apple laptop price 
// console.log(products.data[1].price);

const user = {
  id: 1,
  name: "Hasnat Shahriar",
  address: {
    street: {
      first: 'Ratangonj',
      second: 'Kalihati',
      third: 'Tangail'
    },
    city: 'Dhaka'
  }
}
console.log(user.address.street.first);

const user2 = {
  id: 1,
  name: "Hasnat Shahriar",
  address: {
    city: 'Dhaka',
    country : 'Bangladesh'
  }
}
console.log(user2.address.street?.first);