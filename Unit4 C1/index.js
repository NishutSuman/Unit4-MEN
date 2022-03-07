const express= require("express");
const req = require("express/lib/request");
const app= express();

app.use(allLogger);
// app.use(checkPermission)

app.get("/books",(req,res)=>{
    return res.send({route: "/books"});
})
app.get("/libraries",checkPermission('librarian'),(req,res)=>{
    return res.send({ route: "/libraries", permission: req.allow, checkPermission:req.type});
})
app.get("/authors",checkPermission('author'),(req,res)=>{
    return res.send({ route: "/authors", permission: req.allow, checkPermission:req.type});
})

function allLogger(req,res,next){
    console.log(" all Logger is running...");
    next();
    console.log(" all Logger finished...");
}

function checkPermission(role){
    if(role=='librarian'){
        return function checkPermission(req,res,next){
            if(req.path==="/libraries"){
                req.allow=true;
                req.type= 'librarian';
                console.log('Check Permission for library is running...')
            }
            next()
            console.log("Library handler finished...")
        }
    }else if(role=='author'){
        return function checkPermission(req,res,next){
            if(req.path==="/authors"){
                req.allow=true;
                req.type='author';
                console.log('Check Permission for author is running...');
            }
            next()
            console.log("Author handler finished...")
        }
    }
}

app.listen("5000",()=>{
    console.log("Listening at port 5000...")
})