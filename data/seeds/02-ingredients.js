
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'sauce', quantity: 7.8, measurement: 'ounces'},
        {ingredient_name: 'cheese', quantity: 2.5, measurement: 'cups'},
        {ingredient_name: 'pepperoni', quantity: 1.8, measurement: 'cups'},
        {ingredient_name: 'sausage', quantity: 1.6, measurement: 'cups'}
      ]);
};
