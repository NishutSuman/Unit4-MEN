const express= require("express");

const myApp= express();

// console.log(myApp)

myApp.get("",function (req,res){
    console.log('Hii1')

    res.send("Hello Users")
})

myApp.get("/books", function(req,res){           //method + route
    console.log('Hii')

    res.send({Book: [{title:"You Can Win",author:"Shiv Khera",dop:"Jan 2008"},{title:"Rich Dad Poor Dad",author:"Robert Kiyoski",dop:"Jan 2010"},{title:"Wings Of Fire",author:"APJ Abdul Kalam",dop:"Jan 2012"},{title:"Alchemist",author:"Paul Choello",dop:"Jan 2016"}]})
})

myApp.listen(5000, ()=>{
    console.log("Listening at 5000...")
})