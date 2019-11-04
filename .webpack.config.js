// define child rescript
module.exports = config => {
  config.target = 'electron-renderer';
  config.externals = ['pg', { 'sqlite3': "require('sqlite3')" }, 'tedious', 'pg-hstore'];
  return config;
}