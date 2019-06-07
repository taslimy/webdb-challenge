const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function insert(action) {
  return db("actions").insert(action);
}

function find() {
  return db("actions");
}

function findById(id) {
  return db("actions").where({ id });
}

function remove(id) {
  return db("actions")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("actions")
    .where({ id })
    .update(changes);
}
