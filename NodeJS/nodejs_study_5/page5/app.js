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

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/list', (req, res) => {
  connection.query(
    'SELECT * FROM articles',
    (error, results) => {
      res.render('list.ejs', { articles: results });
    }
  );
});

app.get('/article/:id', (req, res) => {
  const id = req.params.id;
  connection.query(
    'SELECT * FROM articles WHERE id = ?',
    [id],
    (error, results) => {
      res.render('article.ejs', { article: results[0] });
    }
  );
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});


app.post('/login', (req, res) => {
  // Assign the email value received from the form to the email constant
  const email = req.body.email;
  // Paste the given code to get the user's information
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      // Split the process based on the number of elements in the results array
      if (results.length > 0) {
        if (req.body.password === results[0].password){
          console.log('Authentication success');
          res.redirect('/list');
        } else {
          console.log('Authentication failed');
          res.redirect('/login');
        }
      } else {
        res.redirect('/login');
      }
    }
  );
});


app.listen(3000);
