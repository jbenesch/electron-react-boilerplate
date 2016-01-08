require('dotenv').load();
const mysql = require('mysql');
// const php = require('php-unserialize');
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

exports.allBlogs = (callback) => {
  db.connect();
  db.query('SELECT blog_id, domain FROM wp_blogs WHERE public=1 AND deleted=0;', (err, data) => {
    callback(err, data);
    db.end();
  });
};
