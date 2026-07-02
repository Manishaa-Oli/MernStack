### To create any react project

- run `npm create vite@latest`
- then select your preferences
- Installation takes time 
- Frontend url is `http://loocalhost:5173`
- Root directory is the one with `package.json`
- Always open vscode on root directory
- Then run with `npm run dev`
- Browse the url on browser

#### - React is a single page file which runs first on browsing 

i.e. `index.html` is the first file to open on browsing
- index.html loads `main.jsx` => calls `app.jsx`
- To make component do 

# React.js

to make any CRUD ,first make schema , then route then index.js

This is the frontend framework.

 -React treats tag as data

 -Tags can be stored in variable and only one tag can be returned at a time

 -We use {} inside the tag to perform js operations(add,sub,variable call)

 -Image needs to be placed in public folder

 -Map converts object to div

 -Map is done on array
 -basic of html
 ### i) component - it is the self made tag
 
 - Component is custom tag
 - To create a component start inside `src`
 - The first letter of component is capital
 - Call as normal tag like `<Mother></Mother>`

 ### ii) Pros -for passing any variable value

 - value passed during component calling
 - props is in the opening tag
 
 - `rafce` tab gives self made tag
 - Use curly braces to wrap any value other than string on props(inside opening curly braces)
 - useState to make variable
 - `Children` is the content written between opening and closing tag of html


 - Make a component inside src
 - call it in app.jsx
 - import there
 - pass props 

 ### date : 2083-02-29

## topic: React-router-dom
 
 First install it by `npm i react-router-dom`

 then run it using `npm run dev`

 - In `main.jsx` wrap `<App>` by `<Browser>`

 - to change url using navlink or button
 - use `to="/about"` on the opening tag of `<Navlink>`
 - for button click use navigate i.e. `navigate("/login")`

 ### Use of curly braces

 - While performing javascript in html
 - calling value of variable
 - props

 
#### UseState - Hook 
- make `LearnUseState.jsx` inside src
- for example: `let[count,setCount]=useState(0)` 

Here, we made a useState variable `count` 

- We can change any useState variable on browser 



#### External CSS

- make a file `.css` in src
- import in `main.jsx`

#### To tackle error see console

- do `ctrl+shift+i` for console

### React-Router-Dom contd...

For changing page according to url

- make `CosmosRoute.jsx` inside src
- make component folder inside src
- make each component like `about.jsx` file inside component
- inside `about.jsx` do rafce then tab 
- write `<Routes>` inside `<div>`
- write `<Route>` inside `<Routes>`

#### On running

index.html->main.jsx-> CosmosApp.jsx->CosmosLink.jsx-> CosmosRoute.jsx

### Route is of two types:

- Static Route : `path="/job"`
- Dynamic Route: `path="/job/:id1/name/:id2"`