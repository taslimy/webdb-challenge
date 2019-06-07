exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl
      .string("name", 150)
      .notNullable()
      .unique();

    tbl.string("description", 250).notNullable();

    tbl.boolean("completed"); // return 0 or 1
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};

// https://devhints.io/knex
