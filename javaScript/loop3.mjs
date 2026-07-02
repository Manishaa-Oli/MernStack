let ar1=[10,20,30,40,50]
/*map loop is always used for array when ip and op are array of same length
map id used for modification*/
let ar= ar1.map((item,i)=>{
//return 4; output is [4,4,4]
return item*i
})
console.log(ar)

//for [30,40,50,60]=>[60,80,100,120]
let num=[30,40,50,60]
let num1=num.map((item,i)=>{
    return item*2
})
console.log(num1)


//if item greater than 18 multiply by 2 else multiply by 0

let n=[34,2,56,12]
let m=n.map((item,i)=>{
if(item >=18){
   return item*2
}
else{
   return item*0
}
})
console.log(m)

let users=[
    {name:"aditi",age:22,class:"IT"},
    {name:"mahi",age:20,class:"Comp"},
    {name:"manisha",age:21,class:"computer"}
]
//required op ["IT","comp","computer"]
let cls=users.map((item,i)=>{
    return item.class
})
console.log(cls)


/* string can be defined as using " " or '' or ``
we can define variables inside ` ` */

let name="manoj"
let surname="oli"
let info=`my name is ${name} ${surname}`
console.log(info)