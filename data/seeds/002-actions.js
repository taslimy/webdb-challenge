
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: 1,
          description: "This is a test description 1",
          notes: "This is a test note 1",
          completed: true,
        },
        {
          project_id: 2,
          description: "This is a test description 2",
          notes: "This is a test note 2",
          completed: false
        },
        {
          project_id: 3,
          description: "This is a test description 3",
          notes: "This is a test note 3",
          completed: false
        }
      ]);
    });
};
