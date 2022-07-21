const planService = require('../services/plan-service');

function plansList(req, res){
    const plans = planService.getAllPlans()
    return res.status(200).json(plans);
}

function planAdding(req, res){

    const {plan} = req.body; //postman

    if(!plan){
        return res.status(400).json({error: "Invalid plan, todo is null"});
    }

    try{
        const plans = planService.addPlan(plan)
        return res.status(200).json(plans);
    }catch(err){
        return res.status(500).json({error: err.toString()})
        //return res.status(error.statusCode || 500).json({error: err.toString()})
    }
}

function planDeleting(req, res) {
    const id = req.params.id

    try{
        const plans = planService.deletePlan(id)
        return res.status(200).json(plans);
    }catch(err){
        return res.status(500).json({error: err.toString()})
        //return res.status(error.statusCode || 500).json({error: err.toString()})
    }
}

function planEditing(req, res) {
    const id = req.params.id
    const {plan} = req.body; //postman

    try{
        const plans = planService.editPlan(id, plan)
        return res.status(200).json(plans);
    }catch(err){
        return res.status(500).json({error: err.toString()})
        //return res.status(error.statusCode || 500).json({error: err.toString()})
    }
}

module.exports = {
    plansList,
    planAdding,
    planDeleting,
    planEditing
}