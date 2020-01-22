exports.up = async (knex) => {
  await knex.schema.createTable("hobbits", (table) => {
    table.increments()
    table.string("name", 255).notNullable()
  })
}

exports.down = async (knex) => {
  // undo the operation in up
  await knex.schema.dropTableIfExists("hobbits")
}
