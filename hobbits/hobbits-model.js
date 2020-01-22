const db = require("../data/config")

function list() {
  return db("hobbits")
}

function findById(id) {
  return null
}

function insert(hobbit) {
  return null
}

function update(id, changes) {
  return null
}

function remove(id) {
  return null
}

module.exports = {
  list,
  findById,
  insert,
  update,
  remove,
}