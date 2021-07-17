//closure
function outf(){
    let number=10;
    function inf()
    {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${number} is ${fact}.`);
  }
  inf();
  }
  outf();
  //scope
  let fruits = ['Apple', 'Banana']; //global
  function f1(){
  let k=1; //local
  function f()
  {
      let i=0;//outer
      function f2(){
        console.log(fruits[i]);
      }
f2();
  }
  f();
  console.log(fruits[k]);
  }  
  
  f1();
  
  //change in variable
  function out1(){
    l=14;
    function inn1(){
      l=10;
    }
    inn1();
  }
  out1();
  console.log(l);