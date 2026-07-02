//array destructor
let [a,b,c]=[10,11,12]
console.log(a)
console.log(b)
console.log(c)
//object destructor

let {name,sem,roll,good}={
    name:"manisha",
    sem:"sixth",
    roll:230347,
    good:true
}
console.log(name)
console.log(good)
console.log(roll)

//in object destructor order doesnot matter

/*let {sem,name,good,roll}={
    name:"manisha",
    sem:"sixth",
    roll:230347,
    good:true
}
*/
// ... is a spread operator also known as wraper opener

let ar1=[4,5,6,7]
let ar2=[12,14]
let ar3=[3,ar1]
let ar4=[3,...ar1]
let ar5=[...ar1,...ar2]
console.log(ar3)
console.log(ar4)
console.log(ar5)


let info1={nam:"manu",age:21
}
let info2={nam:"mahi",addr:"dhakeri"}//first nam is replaced by second nam i.e mahi
let info={...info1,...info2}
console.log(info)
