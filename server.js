require("dotenv").config();
const morgan = require("morgan")
const app = require("express")();


app.use(morgan("tiny"))

app.get("/",(req,res)=>{
    console.log("hmm!!!");
    res.send("Hey!");
})


app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is running on port ${process.env.PORT} `)
})