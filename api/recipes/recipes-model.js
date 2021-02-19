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
        .join('instructions as inst', 'ing.id', 'inst.ingredient_id')
        .select('inst.id as id', 'ing.ingredient as IngredientName', 'ing.quantity as Quantity')
        .orderBy('inst.step_id')
        .where('inst.recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('steps as s')
        .join('instructions as i', 's.id', 'i.step_id')
        .select('s.name as StepName')
        .orderBy('i.step_id')
        .where('i.recipe_id', recipe_id)


}