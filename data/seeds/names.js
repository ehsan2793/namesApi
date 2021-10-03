exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('names')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('names').insert([
        {
          name: 'ehsan',
          age: 20,
          email: 'ehsan@gmail.com',
          have_a_goal: true,
        },
        {
          name: 'arsalan',
          age: 20,
          email: 'arsalan@gmail.com',
          have_a_goal: true,
        },
        { name: 'jon', age: 20, email: 'jon@gmail.com', have_a_goal: true },
      ]);
    });
};
