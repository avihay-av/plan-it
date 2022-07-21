const fs = require('fs').promises;
const plansData = "./services/dummy-data.json"

async function getAllPlans() {
    return await readPlansFile()
}

async function addPlan(plan){
    let data = await readPlansFile()
    if(!data) {
        data = []
    }
    
    data.plans.push(plan)
    await writePlansFile(data);
    return data.plans
}

async function deletePlan(id){
    const data = await readPlansFile()
    const index = data.plans.findIndex(plan => plan.id === id)
    const deletePlan = data.plans[index]
    data.plans.splice(index, 1)
    await writePlansFile(data);
    return deletePlan
}

async function editPlan(id, editedPlan){
    const data = await readPlansFile()
    const index = data.plans.findIndex(plan => plan.id === id)
    data.plans[index] = editedPlan
    await writePlansFile(data);
    return editedPlan 
}

async function readPlansFile() {
    try {
        const data = await fs.readFile(plansData);
        console.log(data.toString());
        return JSON.parse(data.toString());
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

async function writePlansFile(content) {
    try {
        await fs.writeFile(plansData, JSON.stringify(content));
    } catch (error) {
        console.error(`Failed to write to file ${error.message}`);
    }
}

module.exports = {
    getAllPlans,
    addPlan,
    deletePlan,
    editPlan,
}