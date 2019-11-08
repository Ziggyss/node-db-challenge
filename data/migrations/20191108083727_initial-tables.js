exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .text("project_name", 128)
        // .unique()
        .notNullable();
      tbl.text("project_description", 256);
      tbl.boolean("complete").defaultTo(false);
    })

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl
        .text("task_description", 256)
        // .unique()
        .notNullable();
      tbl.text("notes", 384);
      tbl.boolean("complete").defaultTo(false);
      tbl
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects");
      // .onUpdate('CASCADE')
      // .onDelete('CASCADE');
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .text("resource_name", 128)
        .unique()
        .notNullable();
      tbl.text("resource_description", 256);
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects");
      // .onUpdate('CASCADE')
      // .onDelete('CASCADE');
      tbl
        .integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources");
      // .onUpdate('CASCADE')
      // .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
