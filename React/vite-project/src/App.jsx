import Address from "./Address"
import Father from "./Father"
import Info from "./Info"
import { Mother } from "./Mother"


const App=()=>{
    //react considers tag as data and can be stored in variable and can also be returned
    //only one tag is allowed to return at one time
    //div is used as a wrapper
let name="manisha"
let surname="Oli"
let products=[
    {name:"laptop",price:50000,_id:1,quantity:10},
    {name:"mobile",price:10000,_id:1,quantity:20},
    {name:"tablet",price:20000,_id:1,quantity:30},
]

let users=[
    {name:"Manisha",sem:"sixth",roll:"230347",image:"Hinalayass.png"},
    {name:"Mahi",sem:"seventh",roll:"230322",image:"Study hours.png"},
    {name:"Manu",sem:"eight",roll:"230367",image:"Musical flow.png"},
]
return (
    <div>
        <h1 style={{backgroundColor:"magenta"}}> my name is {name} {surname}</h1>
        <p style={{backgroundColor:"palegreen"}}>this is the 1st class of react.</p>
        <p style={{border:" solid yellow 2px",backgroundColor:"navajowhite"}}>the sum of 2+5 is {2+5}</p>
        <img style={{border:"solid yellow 2px"}}src="Musical flow.png" width="400px" height="250px"></img>
     
        {products.map((item,i)=> {
            return <div style={{border:"solid green 2px"}}>
                <p>product name is {item.name}</p>
                <p>price is {item.price}</p>
                <p>quantity is {item.quantity}</p>
            </div>
        })}
        
    
 

{users.map((item,i)=>{
    return <div>
        <p>user name is {item.name}</p>
        <p>semester is {item.sem}</p>
        <p>roll is {item.roll}</p>
        <p><img src={item.image} width="600px"></img></p>
    </div>
    
})}

<p className="success"> This is correct message.</p>
<p className="error"> This is error message.</p>
<p className="warning"> This is warning message.</p>

<Address></Address>
<Father name="Nandaram Oli" prof="Teacher" num={9899}></Father>
<Mother name="Khima Oli" prof="Teacher" age={40}></Mother>
<Info sem="sixth" roll={47} hobby="singing"></Info>
</div>



)}


export default App