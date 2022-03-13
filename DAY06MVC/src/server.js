
const connectDB= require("./configs/db")

const app= require("./day06")

// Express PORT
app.listen(4000, async(req,res)=>{
    try{
        await connectDB();
        console.log("listening at 4000...")
    }catch(err){
        console.log(err);
    }
})