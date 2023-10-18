//  function 1
function myFunction1() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

// function 2
const myFunction2 =  function () {
      for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

// function 3
const myFunction3 =  () => {
      for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

// myFunction1();
// myFunction2();
// myFunction3();

// console.log(() => "Hi");

const string = () => 'Mantap';
console.log(string());