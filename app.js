const express= require("express");
const app=express();
const fs = require("fs")
const port=8000;
const path= require("path");


app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine',"pug")
app.set('views',path.join(__dirname,'views'))

app.get("/",(req,res)=>{
	const programme={};
	res.status(200).render('index.pug',programme)
});

app.listen(port,()=>{
	console.log(`the server is successfully running on port${port}`);
});