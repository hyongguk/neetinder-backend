exports.up = function(knex) {
    return knex.schema
      .createTable("users", function(table) {
        table.increments("user_id");
        table.string("sex", 255).notNullable();
        table.string("profile_image");
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("users");
  };
  