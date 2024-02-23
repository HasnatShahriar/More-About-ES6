class Vehicle{
  constructor(name,price){
    this.name = name;
    this.price = price;
  }
  move(){
    console.log('The vehicle is running fast');
  }
}
// const bus = new Vehicle('volvo',2000000);
// console.log(bus);


class Bus extends Vehicle{
  constructor(name, price, seat, speed){
    super(name, price);
    this.seat = seat;
    this.speed = speed;
  }
}
// const bus = new Bus('volvo',2000000,40,'80km/hour')
// console.log(bus);

class Truck extends Vehicle{
  constructor(name,price,capacity,route){
    super(name,price);
    this.capacity = capacity;
    this.route = route;
  }
}
const truck = new Truck('Akij', 2000000, '5 ton', 'All Bangladesh');
console.log(truck);