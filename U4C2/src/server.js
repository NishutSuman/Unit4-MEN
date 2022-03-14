const connectDb= require("./configs/db");

const app= require("./index");

app.listen(5000, async()=>{
    try{
        await connectDb();
        console.log("Listening at 5000...")
    }catch(err){
        console.log(err);
    }
})