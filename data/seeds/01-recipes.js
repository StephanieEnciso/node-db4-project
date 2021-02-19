
exports.seed = function(knex) {
      return knex('recipes').insert([
        {recipe_name: 'pepperoni pizza'},
        {recipe_name: 'cheese pizza'},
        {recipe_name: 'sausage pizza'}
      ]);
};
