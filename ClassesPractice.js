class FirstGeneration {
  constructor(name = "", age = "") {
    this.firstGenName = name;
    this.firstGenAge = age;
  }

  firstGenDisplayDetails() {
    console.log(`Name: ${this.firstGenName} and Age: ${this.firstGenAge}`);
  }
}

class SecondGeneration extends FirstGeneration {
  constructor(name = "", age = "", firstGenName = "", firstGenAge = "") {
    super(firstGenName, firstGenAge);
    this.secondGenName = name;
    this.secondGenAge = age;
  }

  secondGenDisplayDetails() {
    console.log(`Name: ${this.secondGenName} and Age: ${this.secondGenAge}`);
  }
}

const Garp = new FirstGeneration("Monkey_D_Garp", 82);
Garp.firstGenDisplayDetails();

const Dragon = new SecondGeneration("Monkey_D_Dragon", 54, "Monkey_D_Garp", 82);
Dragon.secondGenDisplayDetails();
Dragon.firstGenDisplayDetails();

// class ThirdGeneration{
//     constructor(name='', age='', secGenName='', secGenAge='', firGenName='', firGenAge='') {

//     }
// }
