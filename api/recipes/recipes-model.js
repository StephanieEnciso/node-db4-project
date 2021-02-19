const db = require('../../data/db-config');

module.exports = {
    get,
    getShoppingList,
    getInstructions,
}

function get() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('ingredients as ing')
        .join('instructions as inst', 'ing.ingredient_id', 'inst.ingredient_id')
        .select('inst.instruction_id as id', 'ing.ingredient_name as IngredientName', 'ing.quantity as Quantity', 'ing.measurement as Measurement')
        .orderBy('inst.step_id')
        .where('inst.recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('steps as s')
        .join('instructions as i', 's.step_id', 'i.step_id')
        .select('i.step_id as Step','s.step_name as StepName')
        .orderBy('i.step_id')
        .where('i.recipe_id', recipe_id)


}