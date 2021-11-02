const http = require('http');
const port = process.env.PORT || 3001;
// const app = require('./app')
const express = require("express");
const app = express();

app.listen(port, () => {
    console.log('server is running on port', port);

})

app.get("/", (req,res)=>{
    res.send("Mammalni pilichinanduku dhanyavadhamulu...")
})