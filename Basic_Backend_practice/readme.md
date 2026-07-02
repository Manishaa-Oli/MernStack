## Guidelines for backend setup
1. Create a folder
2. Open it in vs code
`cd <folder path>'

'code .' for opening to vs code

3. ## initialize npm in the terminal
i. Run command: `npm init -y` 

This creates `package.json` with default values.

ii. Or `npm init` for customizing values in package.json

### Contents inside package.json

1. name: The name of your project
2. version: The current version of your project that can change as you update it.

3. description: short explanation of what project does

4. main: entry point of `Node.js` application, which tells node which file to start with. 

Most commonly it's `index.js`

5. scripts: commands you can run using `npm`

Usually the scripts section is modified like this:

`"scripts":{`
    `"start": "node index.js"`

    "dev": "nodemon index.js" 
`}`

Then we can run as:

npm start

OR

npm run dev

6. keywords and author: as name signifies

7. license : defines how others can use your code

Common licenses: ISC,MIT,Apache-2.0

8. ### {type:}
specifies the JavaScript module system.

- commonjs means we use:

`const express=require("express")`

`module.exports=router`

-But if the type is module
i.e `"type": "module"`

we use

`import express from "express"`

`export default router`

### Install backend packages

1. Install Express:

`npm install express`

2. Install nodemon:

`npm install --save-dev nodemon`

3. Install other packages:

`npm install mongoose dotenv`

### To run the server

- Start the server

`npm start`

- Start in development mode with auto-reload

`npm run dev`
