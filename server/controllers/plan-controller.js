const planService = require('../services/plan-service');

async function plansList(req, res){
    const plans = await planService.getAllPlans()
    return res.status(200).json(plans);
}

async function planAdding(req, res){

    const {plan} = req.body; //postman

    if(!plan){
        return res.status(400).json({error: "Invalid plan, todo is null"});
    }

    try{
        const plans = await planService.addPlan(plan)
        return res.status(200).json(plans);
    }catch(err){
        return res.status(500).json({error: err.toString()})
        //return res.status(error.statusCode || 500).json({error: err.toString()})
    }
}

async function planDeleting(req, res) {
    const id = req.params.id

    try{
        const plans = await planService.deletePlan(id)
        return res.status(200).json(plans);
    }catch(err){
        return res.status(500).json({error: err.toString()})
        //return res.status(error.statusCode || 500).json({error: err.toString()})
    }
}

async function planEditing(req, res) {
    const id = req.params.id
    const {plan} = req.body; //postman

    try{
        const plans = await planService.editPlan(id, plan)
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