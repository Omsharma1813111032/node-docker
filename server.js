require("dotenv").config();

const app = require("express")();


app.get("/",(req,res)=>{
    console.log("Yes it is working!!!");
    res.send("Hey its running!");
})


app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is running on port ${process.env.PORT} `)
})