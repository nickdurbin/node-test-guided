const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
}

module.exports = {
  development: {
    ...sqlite,
    connection: {
      filename: "./data/dev.db3",
    },
  },
  testing: {
    ...sqlite,
    connection: {
      filename: "./data/test.db3",
    },
  },
}
