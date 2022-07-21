const planService = require('../services/plan-service');

function plansList(req, res){
    const plans = planService.getAllPlans()
    res.status(200).json(plans);
}

module.exports = {
    plansList
}