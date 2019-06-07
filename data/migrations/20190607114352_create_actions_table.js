exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();

    tbl.string("description", 250).notNullable();

    tbl.string("notes", 500).notNullable();

    tbl.boolean("completed"); // return 0 or 1

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist("actions");
};

// https://devhints.io/knex
