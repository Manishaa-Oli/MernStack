
let age=18
if(age>=18)
{
    console.log("can vote")
}
else{
    console.log("cannot vote")
}
/* if and else if conditions */
let gender="female"
if(gender==="male")
{
    console.log("he")
}
else if(gender==="female"){
    console.log("she")
}
else{

    console.log("they")
}

// define arrow function
let fun1=()=>{
    console.log("i am manisha")
}
console.log("m")
fun1()//function call
console.log("n")
fun1//this is error
console.log("o")


let info=(name,sem,roll)=>{
    console.log(name,sem,roll)
}
info("manisha","sixth",230347)
info("manu","sixth",230322)
info("aditi","karan johar",230104)
// default value define in function
let me=(name="manu",car="noooooooo",house="nooooo")=>{
    console.log(name,car,house)
}
me("manisha")

let brief=()=>{
    console.log("a")
    return "b" //return function
    console.log("c")
}
let m=brief()
console.log(m)
/* function without return
fun()
function with return
let m=fun() */

/* 
function return */

let fun2=(age)=>{
    if(age>=18){
        return"can vote"
    }
    else{
        return"cannot vote"
    }
}
let p=fun2(21)
console.log(p)

/* make a function name prepo 
it takes one input
if input is male return he
if input is female she
else they */

let prepo=(gender)=>{
    if(gender==="male"){
        return"he"
    }
    else if(gender==="female"){
        return "she"
    }
    else{
        return "they"
    }
}
let op=prepo("aditi")
console.log(op)