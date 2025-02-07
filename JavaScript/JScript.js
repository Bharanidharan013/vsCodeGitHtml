(function () {
    console.log("summa summa")
})
();

const tId =id =>(id%2==0 ? "fast processing":"extra verification");
console.log(tId(2345));

var numbers = [1,2,3,4,5,6,7,8,9,10];
var oddNumbers = numbers.filter(num =>num % 2 !== 0);
console.log(oddNumbers);

function showmsg(){
    console.log("Chumma chumma")
}

function msg(message,call){
    console.log(message);
    call();
}
msg("Na thanda Leo",showmsg);


var go=function(){
    console.log("Hi, I am Chitti. Memory 1 zettabyte, speed 1 terahertz.")
}

function aa(msg,fun){
    console.log(msg);
    fun();
}

aa("Leo Das",go);

function authorize(role){
    return function (userRole){
        return userRole === role?"Access Granted":"Access Denied"
    }
}

const isAdmin=authorize("admin");
console.log(isAdmin("admin"));
console.log(isAdmin("user"));

function isPalindrom(str){
    return str === str.split("").reverse().join("");
}

console.log(isPalindrom("Nanthan da Leo"));

function sum(...args){
    let tot =0;
    for(const a of args){
        tot+=a;
    }
    return tot;
}
console.log(sum(1,2,3));

function musk(...arg){
    for(const a of arg){
        if(typeof(a) === "string"){
            console.log(a);
        }
    }
}

musk(1,2,3,"Musk Mama");

let [First,second,third, ...arr] = ["a","b","c","d","e","f"];

console.log(First);
console.log(second);
console.log(third);
console.log(arr.join(""));

function cap(data){
    let atad = data.split("");
    atad[0]=atad[0].toUpperCase();
    return atad.join('');
}

console.log(cap("prasana"));

const addExclamation =str=> str+"!";
const repeatTwice = str => str.repeat(2);
function compose(...args){
    return function(value){
        return args.reduce((acc,atad)=>atad(acc),value);
    };
}
let combine =compose(repeatTwice,cap,addExclamation,cap);
console.log(combine("hello"));

const original = [1,2,3];
const copy = [...original];
copy.push(4);
console.log(original);
console.log(copy);

const number = [5,6,7];
function soo(a,b,c){
    return a+b+c;
}
console.log(sum(...number));