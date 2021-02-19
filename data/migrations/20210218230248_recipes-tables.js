

exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.string('recipe_name', 128).notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.string('ingredient_name', 128).notNullable()
        tbl.decimal('quantity').notNullable()
        tbl.string('measurement', 128)
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.string('step_name').notNullable()
    })
    .createTable('instructions', tbl => {
        tbl.increments('instruction_id')
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
        tbl.integer('ingredient_id')
            .unsigned()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('CASCADE')
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('CASCADE')
    })
};
  
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};