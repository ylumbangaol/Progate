const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'blog'
});

// This is the route path for the Top page
// Confirm the URL and the code to display the page
app.get('/', (req, res) => {
  res.render('top.ejs');
});

// This is the route path for the Articles page
// Confirm the URL and the code to display the page
app.get('/list', (req, res) => {
  connection.query(
    'SELECT * FROM articles',
    (error, results) => {
      // Confirm the data and and property names to be passed to the EJS file
      res.render('list.ejs', { articles: results });
    }
  );
});

// This is the route path for the Article details page
// Confirm the URL and the code to display the page
app.get('/article/:id', (req, res) => {
  const id = req.params.id;
  connection.query(
    'SELECT * FROM articles WHERE id = ?',
    [id],
    (error, results) => {
      // Confirm the data and and property names to be passed to the EJS file
      res.render('article.ejs', { article: results[0] });
    }
  );
});

app.listen(3000);
