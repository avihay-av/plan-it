const express  = require("express");
const {
  plansList,
} = require( "../controllers/plan-controller.js")

const plans = require( "../services/dummy-data.json")
const planRouter = express.Router();

planRouter.get("/", plansList);


module.exports =  planRouter;