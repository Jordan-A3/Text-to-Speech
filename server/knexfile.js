// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database:"comments",
      user:"root",
      password:"Senhadosql123"
    },

    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },

    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    }
  },

};
