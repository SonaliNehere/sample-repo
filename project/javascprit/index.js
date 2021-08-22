 console.log("hello");

/*variables - can Change 
constants - cannot change once defined */
var a = "abc";
const b = 90;
console.log(a);
console.log(b);

// array in javascript can store different datatype 
num = [1,2,3,4,"78", "sonali"];
console.log(num[3]);
console.log(num[5]);

//objects
console.log("--------------objects----------------");
var obj = {
    //key:value
    name: "sonalika",
    id :38,
    num : [1,2,3,4,"78", "sonali"],
    exam:{
        naming: "sonalika",
    roll :380,
    },
    "full name":"sonali nehere"
};
console.log(obj);
console.log(obj.id);
console.log(obj.exam.roll);
console.log(obj.num[0]);
console.log(obj["full name"]);
console.log(obj.num);
console.log("keys ",Object.keys(obj));
console.log("values ",Object.values(obj));
console.log("keys and values ",Object.entries(obj));
obj.id= 450;
console.log(obj);
Object.freeze(obj); //object cannot modify
obj.id= 45;
console.log(obj);

console.log("--------------if else----------------");
//control statements
if(2==2){
    console.log("100");
}
else {
    console.log("False");
}

//switch
console.log("--------------switch----------------");
switch (3){
    case 1 : console.log("1");break;
    case 2 : console.log("2");break;
    case 3 : console.log("3");break;
    default  : console.log("10 ");

}
switch (3==8){
    case true : console.log("1");break;
    case false : console.log("2");break;
    default  : console.log("default");break;

}

//operator
//arithmetic operator
//assignment operator -> =
//logical operators -> AND - &&
//                     OR  - || 
//                     NOT - !
/*comparison operator ->
lesser than < ,greater than > , equals to == , strict equal to(datatype,value) === ,
 */
//increament decreament

//loops
// for -> finite -> we can predict the iterations
// while -> no idea
// do while -> no idea  

//function
console.log("--------------function----------------");
function add(id){
    console.log("this is function" ,id);
}
var a = 9;
add(a);

function sum(id){
    return id;
}

var result = sum(89);
console.log("second function " + result);

//arrow function -> its nothing but assigning a function to variable. it is part of ES-6.
//                      which is updated version of javascript
//                  left part of  is declaration and right part is called initialization
console.log("--------------arrow function----------------");
var adds = (x) => console.log("arrow function",x);


adds(5);
var div = add(1000); /* thats why use const for function .const can't override*/



//arrow function and normal function difference
//1.Hoisting -> in normal function if we call function before its declaration then also it 
//            it work but arrow function it will not work. In case of normal function in
//             background system copies the code inside defination and paste it in a
//             before call. but in arrow function it move just variable
//              so thats why there will be error.
//2.this ->it is a keyword depends on environment. it refer currently executing object
// environment - parent object
//Browser = window
//PC = () i.e. empty
console.log(this);
//3.syntax and appearence

console.log("arrow function and normal function");
function getThis(){
    console.log("this is normal function for use of 'this' ");
    console.log(this);
}
getThis();

const arrowGetThis = () => {
    console.log("this is arrow function for use of 'this' ");
    console.log(this);
}
arrowGetThis();

console.log("--------this using normal function in object--------");
const our_obj = {
    name : "this name",
    getThis: function (){
        console.log(this);
    }
};
our_obj.getThis();

console.log("--------this using arrow function in object--------");
//arrow function not support "this" in object
const my_obj = {
    name : "this name",
    getThis: () =>{
        console.log(this);
    }
};
my_obj.getThis();


//ES6 array and object methods
console.log("--------ES6 array and object methods--------");
const arr = [1,2,3,4,5];
console.log(arr);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
// pop push applicable to end

arr.unshift(7);
console.log(arr); //to push at start

arr.shift();
console.log(arr); //to pop at start

console.log("--------------use foreach for array----------------");
arr.forEach((i) => console.log(i));
console.log("--------------use map function for array----------------");
arr.map((i) => console.log(i)); // introduce in ES6 

console.log("---------foreach for return-----------------");
//const f = arr.forEach((i) => console.log(i)); //foreach is a method it didn't return anything 
                       
const f = arr.forEach((i) => i); 
console.log("foreach return",f); //foreach doesn't have datatype and doesn't have value , 
//                                  so undefined

console.log("--------map for return-----------");
//var m = arr.map((i) => console.log(i)); /* map  is a method it return anything */
                      
var m = arr.map((i) => i); 
console.log("map returning",m);

//ES6
console.log("---------------------------------------ES6---------------------------");
//normally we have to do this 
function hello(n){
    if(n) console.log("name= " +n);
    else console.log("no name");
}

hello();
hello("sonali");
//null has datatype but empty value
//undefined doesn't have a datatype also it doesn't have a value

//this is about ES6 it take veer by default
function hii(n="veer"){
    console.log("name= " +n);
    
}
hii();
hii("rani");

//Template Literal 
// it direct print element as we type no need to use \n
console.log("------------------------------Template literal---------------------------");
console.log(`
Aditya
Avantika
raj
   sara
   parth
   ${arr}
   ${a}
`);

var dhiraj = "old";
let viki = "new";
window.dhiraj;
window.viki; //var assign object to parent while let not
// we cant repeat 'let' name for declaration . we can declare in different scope
//scope

//promises
console.log("---------------------------promises---------------------------");
//synchronous javascript= excute task immediately or real time
//asynchronous javascript =for  excute task , take some time

//promise pending - 1. resolve 2. reject
//http request - by default use fetch for http request
// https://jsonplaceholder.typicode.com/users - server give free data
console.log(fetch("https://jsonplaceholder.typicode.com/users")); //promise pending
console.log("---------------------------resolve promise---------------------------");
fetch("https://jsonplaceholder.typicode.com/users") //then function use to resolve
.then((result) => result.json())                    //json use to process the result so that we get data what we need ,it is asynchronous,response data
.then((data) => console.log(data))                  // get user data
.catch((error) => console.log(error));              //errors . it above statement fail then catch will execute

//Async Await ->it is also a way deal with promise using normal variable or syntactically improved way
//using normal function 
// use try catch to catch error in async await
console.log("-----------------async await using normal function----------------");
async function getData1() { 
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await result.json(); // can't use await without declaring async
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
} 
getData1();

console.log("-----------------async await using arrow function----------------");
//using arrow function
const getData = async() => {
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await result.json(); // can't use await without declaring async
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
};
getData();









