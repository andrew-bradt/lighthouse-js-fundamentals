const sayHello = function(name){
  console.log(`Hello, ${name}`);
}

sayHello('Andrew');

const returnSayHello = (name)=>{
  return `Hello, ${name}`;
}

const greeting = returnSayHello('Jim');
console.log(greeting);