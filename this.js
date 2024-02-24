class Person{
  constructor(name,address) {
    this.name = name;
    this.address = address;
  }
  sleep(){
    console.log(`Where are you now ${this.name}`);
  }
  activity(){
    this.sleep();
  }
}

const prijom = new Person('md. Prijom','kalihati');
console.log(prijom);
prijom.sleep();

const abdullah = new Person('Abdullah','Kalihati');
console.log(abdullah);
abdullah.sleep();

// error/wrong

const lazy = prijom.sleep;
lazy();