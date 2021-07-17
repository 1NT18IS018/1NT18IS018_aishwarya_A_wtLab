

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function employee(name,age,emp_id)
  {
    this.parent=Person;
    this.parent(name,age);
    this.emp_id=emp_id;
  }
  let p1 = new  employee('Aishwarya', 20,"018");
  console.log(p1);


  let age = new Map();
  age.set('Alex',20);
  age.set('Sam',21);
  age.set('Aryan',18);
  console.log(age)
  console.log(age.size);
  console.log(age.get('Alex'))
  console.log(age.has('Sam'))
  console.log(age.values())
  console.log(age.keys())
  age.delete('Aryan')
  console.log(age)

  const s1 = new Set()
  s1.add(12)           
  s1.add(13)           
  s1.add(5)           
  s1.add('hello') 
  s1.add({aish: 20, john: 18})   
  console.log(s1)
  console.log(s1.entries())
  console.log(s1.has(1))               
  console.log(s1.size)        
  s1.delete(5)   
  console.log(s1.has(5))              
 for (let item of s1) console.log(item)
 console.time('Object');
 let car = {type:"Fiat", model:"500", color:"white"};
 console.timeEnd('Object');
 //console.time('Object');
 car.color; 
//console.timeEnd('Object');

let age = new Map();
console.time('Map');
  age.set('Alex',20);
  console.timeEnd('Map');
  age.set('Sam',21);

  //console.time('Map');
  age.has('Alex');
  //console.timeEnd('Map');

  let car = {type:"Fiat", model:"500", color:"white"};
  
  console.log(car)

  const map = new Map(Object.entries(car));
  
  console.log(map) 

    
      



let car = {type:"Fiat", model:"500", color:"white"};
  
  console.log(car)

  const map = new Map(Object.entries(car));
  
  console.log(map) 

  const obj = Object.fromEntries(map);
  
  console.log(obj);

  function intersection(A, B) {
    let result = new Set()
    for (let elem of B) {
        if (A.has(elem)) {
          result.add(elem)
        }
    }
    return result
}
const A = new Set([1, 2, 3, 4])
const B = new Set([3, 4, 5, 6])
let union = new Set([...A, ...B]);
console.log(union)
console.log(intersection(A, B))


class Stack {
  constructor(){
      this.data = [];
      this.top = 0;
  }

stpush(element){
  this.data[this.top] = element;
  this.top = this.top + 1;
}

slength(){
  return this.top;
}
top_ele() {
  return this.data[this.top -1 ];
}

isEmpty() {
  return this.top === 0;
}

spop() {
  this.top = this.top -1;
  return this.data.pop(); 
}

sdisplay() {
  let top = this.top - 1; 
  while(top >= 0) { 
    console.log(this.data[top]);
    top--;
  }
}
}

let st=new Stack();
st.stpush(3);
st.stpush(2);
st.sdisplay();



//closure
function outf(){
  let number=10;
  function inf()
  {
      let fact = 1;
      for (var i = 1; i <= number; i++) {
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
console.log(fruits[k]);
}  
function f2(){
  console.log(fruits.length);
}
f1();
f2();
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


class fruits{
  constructor(name, weight){
      this.name = name;
      this.weight = weight;
  }
  run(){
      console.log("fruit is selected!!");
  }
  static fruits(){
      console.log("static function called");
  }}
class shop extends fruits{
  constructor(name, weight, price){
      super(name,weight);
      this.price = price;
  }
  run(){
      super.run();
      console.log("billing the fruit item!!");
  }}
const fr1 = new shop("apple",3,180);
fr1.run();
fruits.fruits();
function Arrays_sum(array1, array2) 
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}


