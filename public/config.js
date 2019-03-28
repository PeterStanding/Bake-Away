module.exports = {
  mysql: {
    host: 'localhost',
    user: 'BakeAway',
    password: 'password123',
    database: 'database',
    insecureAuth: true,
  },
  port: process.env.PORT || 8080,
};
