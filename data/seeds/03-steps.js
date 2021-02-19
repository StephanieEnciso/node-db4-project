
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_name: 'spread ingredient'},
        {step_name: 'sprinkle ingredient'},
        {step_name: 'add ingredient'},
        {step_name: 'bake at 475degrees F for 10mins'},
        {step_name: 'enjoy'}
      ]);
};
