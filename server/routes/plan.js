const express  = require("express");
const {
  
  getAllItems,
 
} = require( "../controllers/planController.js")
const planRouter = express.Router();

planRouter.get("/", (req,res)=>{
    res.status(200).json("test");
    
});


module.exports =  planRouter;