// class : class is the template for making objects.

class Products {
  country = 'Bangladesh';
  constructor(name){
    this.name = name;
  }
  speak(talk){
    console.log(`Talking about ${talk}`);
  }
}

const walton = new Products('walton zx2 mini');
// console.log(walton);
// walton.speak('nirapad sharak chai');

class Teacher{
  constructor(name, subject){
    this.name = name;
    this.subject = subject;
  }
  lecture(talk){
    console.log(`Teaching style is good ${talk}`);
  }
}

const babuSir = new Teacher('Babu','All Subjects');
console.log(babuSir);
babuSir.lecture('all')

const sajjadSir = new Teacher('Sajjad','Mathematics');
console.log(sajjadSir);