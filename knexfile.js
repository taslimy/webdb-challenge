module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/webdbsprint.db3"
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
