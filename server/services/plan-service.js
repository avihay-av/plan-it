const plans = require( "../services/dummy-data.json")

function getAllPlans(req, res) {
    return plans
}

module.exports = {
    getAllPlans
}