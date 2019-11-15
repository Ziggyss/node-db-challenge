
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "Lisa's laptop", resource_description: 'A lovely, yet broken laptop with an unusable screen'},
        {resource_name: 'Ziggy', resource_description: 'A happy cat who is very good at finding the warm spot, but not so good at coding'},
        {resource_name: 'The Internet', resource_description: 'A very, very, very good resource'}
      ]);
    });
};
