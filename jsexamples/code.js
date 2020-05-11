 console.log("hii!!");
 alert('javascript'); 
 //var,let,const
  let age=21;
 age=22;
 console.log(age);
 
 const score=10;

 console.log(score);
  console.log(typeof(score));
  //data types :string,numbers,boolean,null,undefined
  const name="mittu";
  const mage=21;
  const rating=4.5;
  const iscoll=true;
  const x=null;
  const y=undefined;
  let z;
  console.log(typeof(is));
  console.log(typeof(z));

  //concatenation
  console.log('my name is ' +  name  + ' and i am '+age);

  const s="javasript,html,python";
  console.log(s.length);
  console.log(s.split(','));

  //arrays-variables that hold multiple values
 const numbers=new Array(1,2,3,4,5);
 console.log(numbers);

 const  fruits=['apple','mangos','grapes'];
 fruits[3]='pears';
 fruits.push('oranges');
 fruits.unshift('strawberries');
  fruits.pop();
  console.log(Array.isArray(fruits));
  console.log(fruits.indexOf('mangos'))
 console.log(fruits);
   //objet 
 const person={
     firstname:"kishu",
     lastname:"rathva",
     hobbies:["music",'cricket'],
     address: {
         street:'50 main st',
         city:'baroda',
         state:'gujrat'
     }
     }  
     console.log(person.firstname,person.lastname);
     console.log(person.hobbies[1]); 
     console.log(person.address.city);
    //destruture
    const {firstname,lastname,address:{state}} =  person;
    console.log(state);

   person.email='kishu@gmail.com';
   console.log(person); 
   //objet
   const todos=[
       {
           id:1,
           text:'take out trash',
           isCompleted:true
       },
       {
        id:2,
        text:'meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'dentist appt',
        isCompleted:false
    }
   ];
   console.log(todos[1].text );
   const todosJSON = JSON.stringify(todos);
   console.log(todosJSON);
//for
for(let i=0;i< todos.length;i++){
    console.log(todos[i].text); 
}

 //while
 let i=0;
 while(i<10){
    console.log(i); 
    i++;
 }
//forEach ,map,filter ,funtion
todos.forEach(function(todo) {
    console.log(todo.text);
});
 //map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
//filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);

//example
// const calculator ={
//     sum:{
//          x:10,
//          y:15,
//          sumation: () =>{
//              return (function() {
//                  console.log(this)
//                  console.log(calculator.sum.x);
                 
//              }).bind(calculator.sum)();
//          }
//     }
//     div:{
//         x:20,
//         y:30,
//             division:() =>{
//                 return(function() {
//                     console.log(this)
//                     console.log(calculator.div.x);
                    
//                 }).bind(calculator.div)();
//             }
       
//     }
// }
   
 //if statement
 const a ='30';
 const b='19';
 if(a > 10 || b >15){
     console.log('a ismore than 10 or b is more than 20');
 }
//  else if(a>10){
//      console.log('a is greater than 10');
//  }
//  else {
//      console.log('a is NOT 10');
//  }

//conditional or ternary operators
const c=21;
const color = 'green';// > 10 ?'red':'bule';
console.log(color);
//switch
switch(color){
    case'red':
    console.log('color is red');
    break;
    case'blue':
    console.log('color is blue');
    break;
    default:
        console.log('color is NOT red or blue');
        break;
}
//function 


const  addNums=(no1=1,no2=1) => {//without use function key word
    return no1 + no2;
}
    console.log(addNums(5,5));

const addition =num1 =>num1 +2;
console.log(addition(2));
//oop construture function pretotypes
function student(firstname,lastname,dob) {
    this.firstname='mittal',
    this.lastname='rathva',
    this.dob= new Date('dob');
}
student.prototype.getBitrhYear =function() {
    return this.dob.getFullYear
    
}
student.prototype.getFullName =function() {
    return '${this.firstname}${this.lastname}';
    
}
//class
class studenst{
    constructor(){
        this.firstname='mittal',
    this.lastname='rathva',
    this.dob= new Date('dob');
    }
    getBitrhYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return '${this.firstname}${this.lastname}';
    
    }
}
//instantiate object
const student1= new student('kaju','ptl','12-2-2004');
const student2=new student('dhamu','rtw','23-3-2009');
console.log(student2.getFullName);
console.log(student2);


//single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
//multiple element
//console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));

// const items =document.querySelectorAll('.item');
// items.forEach((item) =>console.log(item));
// const ul =document.querySelector('.items');
// ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent ='hello';
//ul.lastElementChild.innerHTML = '<h1>hello</h>';
// const btn=document.querySelector('.btn');
// btn.style.background ='red';
// const btn=document.querySelector('.btn');
// btn.addEventListener('click',(e) =>{
//     e.preventDefault();
//     console.log('click');
// }
// );
//method ->obj
//function ->global(window,global)
const  video ={
    title:'a',
    play(){
        console.log(this);
    }
};
function playVideo() {
    

    console.log(this);
}
video.play();