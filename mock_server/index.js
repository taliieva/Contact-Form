import express from "express";
//console.log("hello world")
//import { sayHello } from "./test.js";
//console.log("----");
//sayHello();
import cors from "cors";
const  app = express();
const port = 3001;

app.use(cors());
app.get("/",(req, res)=>{
    res.json({
        fullname:{
            name:"Eli",
            surname:"pirveli"
        },
        phone:"+9945000000",
        gender: "male",
        priority:"low",
        texts: ['salam necesen',"heyatdi da"],
    });
});


app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`);
});