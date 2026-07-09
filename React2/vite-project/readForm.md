### Date: 2083-03-19
## Form

#### To learn about form creation

- Create a new folder React2
- Navigate to folder and open in vscode
- on terminal ` npm create vite@latest`
- press y
- give project name
- select framework `React`
- select a variant `JavaScript`
- select linter to use i.e. `Oxlint`
- Install with npm and start (y)
- navigate to viteproject and open vscode there
- on terminal `npm run dev`
- Browse it with url `localhost:5173`
- Clear all `app.jsx`,`index.css`,`app.css` to erase previously done work

### To create our form
 
 - Create folder `component` inside src
 - create `CosmosNavlink.jsx` inside that folder
 - in terminal `npm i react-router-dom`
    - to work with `react-router-dom` wrap App in main.jsx with `<BrowserRouter>`
 - inside `CosmosNavlink.jsx` do `rafce tab`
 - import neccessary terms on each file
 #### output will be
 
 the content of CosmosNavlink as: `ProductCreateProduct` type

 ### For css

 - Use github copilot and give prompt `make a nav bar,must be responsive, use external css` which will give css

 - then create product,user folder inside component and do `rafce` inside each
 - then route inside `CosmosRoute.jsx`

 #### 2083-03-25

 - create form field : input field and button field
 - inside input field make number of div as number of inputs
 - i.e. `<div>Name</div>`
 - <input> is empty tag don't write anything inside it
 - make variables to store data of input fields like, `let[name,setName]=Usestate("")`
 - then store value to it inside input field i.e.`setName(e.target.value)`

 #### To integrate with backend 

 We have,
 - frontend url=`http://localhost:5173`
 - backend url=`http://localhost:8000`

   #### steps
   1. run backend 
   2. check all operations of backend are working through postman

   3. in frontend run `npm i axios` to integrate frontend and backend
   4. in backend do `npm i cors` then run `npm run dev`
   5. after app.listen in index.js add `app.use(cors())` and import `cors`
      
      this is called `cors enable` which means frontend(browser) can request backend.
   
   6. now run frontend and browse the frontend url,
     see network panel for verifying if the product is created
     - go to `network`-> `fetch/XHR`-> click product->`preview`