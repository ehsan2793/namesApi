
exports.up = function (knex) {
  return knex.schema.createTable('names', table => {
    table.increments('id');
    table.text('name', 24).notNullable()
    table.integer('age').notNullable()
    table.text('email').unique()
    table.boolean('have_a_goal').defaultTo(false)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('names')
};
