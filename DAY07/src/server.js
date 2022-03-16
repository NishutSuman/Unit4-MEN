 const connectDb= require("./configs/db")

 const app= require("./index");

 // PORT RESPONDING
app.listen(4321, async()=>{
    try{
        await connectDb();
        console.log("listening at 4321...");
    }catch(err){
        console.log (err);
    }
})