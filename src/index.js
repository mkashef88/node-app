const express = require('express')
const PORT=4000;
const app=express();

app.get('/', (req,res)=>res.send(`<h1> Hello World!</h1>`))
app.listen(PORT,()=>console.log(`App is up and runing on port: ${PORT}`))