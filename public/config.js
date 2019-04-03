module.exports = {
  mysql: {
    host: 'localhost',
    user: 'root',
    password: 'bakeawaypass',
    database: 'BakeAway',
    insecureAuth: true,
  },
  port: process.env.PORT || 8080,
};
//root 3306
