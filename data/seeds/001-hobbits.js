exports.seed = async (knex) => {
  // Deletes ALL existing entries and resets ids
  await knex("hobbits").truncate()

  await knex("hobbits").insert([
    { name: "sam" },
    { name: "frodo" },
    { name: "pippin" },
    { name: "merry" },
  ])
}
