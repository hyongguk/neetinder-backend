
exports.up = function(knex) {
  return knex.schema.table('users', table => {
    table.string("name", 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.shema.table('users', table => {
    table.dropColumn('name');
  })
};
