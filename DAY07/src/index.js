const express= require("express");
const app= express();
module.exports= app;

app.use(express.json());

// CRUD CONTROLLERS
const userControllers= require("./controllers/users.controllers");
const studentControllers= require("./controllers/student.controllers");
const batchControllers= require("./controllers/batch.controllers");
const evaluationControllers= require("./controllers/evaluation.controllers");
const submissionControllers= require("./controllers/submission.controllers")


//MiddleWrae for Constructors
app.use("/users",userControllers);
app.use("/students",studentControllers);
app.use("/batches",batchControllers);
app.use("/evaluations",evaluationControllers);
app.use("/submissions",submissionControllers);

