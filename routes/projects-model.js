const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function insert(project) {
  return db("projects").insert(project);
}

function find() {
  return db("projects");
}

function findById(id) {
  return db("actions")
    .where({ "actions.project_id": id })
    .first()

    .join("projects", "projects.id", "actions.project_id")
    .select(
      "projects.id",
      "projects.name",
      "projects.description",
      "projects.completed"
    );
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("projects")
    .where({ id })
    .update(changes);
}
