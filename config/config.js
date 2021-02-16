module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
