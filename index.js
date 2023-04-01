//-----------IMPORT EXPRESS AND CREATE SERVER----------------

let express = require('express');
const app = express();
const loggerFunction=require('./middleware/logger')

//-------------START SERVER----------------------------------

app.listen('3000',()=>{
    console.log("server listening....");
});

//----------middleware-----------------

app.use(loggerFunction.logs)

//-------------PAGE NAVIGATION-------------------------

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{ root:__dirname })
})

app.get('/about',(req,res)=>{
    
    res.sendFile('./views/about.html',{ root:__dirname })
})

app.use((req,res)=>{
    res.sendFile('./views/404.html',{ root:__dirname })
})

