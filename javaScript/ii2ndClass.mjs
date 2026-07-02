
//array
let info=["manisha","karan johar",50,true]
console.log(info)
console.log(info[1])
info[1]="aditi"
console.log(info)
//to add at end of array
info.push("a")
info.push("b")//to add on start
console.log(info)
info.pop()//to remove from end
console.log(info)
info.unshift("z")//to add to beginning
console.log(info)
info.shift("z")//to remove from beginning
console.log(info)

let van={
    name:"manisha",//key:value
    age:21,
    hasCar:false,
}
console.log(van)//to retrieve value
van.hasCar=true//to update value
console.log(van.hasCar)
//to add new attribute
van.sem="sixth"
console.log(van)
//to delete

delete van.hasCar
console.log(van)