exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Project 1", description: "This is a Project description 1." },
        { name: "Project 2", description: "This is a Project description 2." },
        { name: "Project 3", description: "This is a Project description 3." }
      ]);
    });
};
