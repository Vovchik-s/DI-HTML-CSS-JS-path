// Exercise 1 : Bird Class
// Instructions
// Analyze the code below, what will be the output ?


    class Bird {
        constructor() {
            console.log("I'm a bird. 🦢");
        }
    }

class Flamingo extends Bird {
    constructor() {
        console.log("I'm pink. 🌸");
        super();
    }
}

const pet = new Flamingo();


// Answer : I'm pink. 🌸
// Real answer : I'm a bird. 🦢 I'm pink. 🌸
// Hmm...