const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',	
  database: 'blog'
});

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (req.session.userId === undefined) {
    res.locals.username = 'Guest';
    res.locals.isLoggedIn = false;
  } else {
    res.locals.username = req.session.username;
    res.locals.isLoggedIn = true;
  }
  next();
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

app.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

app.post('/signup', 
  (req, res, next) => {
    console.log('Empty input value check');
    // Declare three constants and assign the values from the sign up form to each of them
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
    // Define an empty array
    const errors = [];
    
    // Create an if statement for each of the three constants to check if they are an empty string
    // If they are empty, add an error message to the errors array
    if(username === ''){
      errors.push('Username is empty');
    }
    if (email === ''){
      errors.push('Email is empty');
    }
    if (password ===''){
      errors.push('Password is empty');
    }
    // Use console.log to print the errors array to the terminal
    console.log(errors);
    
    // Use an if statement to check if the number of elements in the errors array is greater than zero
    // Also write the code according to the conditional expression result
    if(errors.length > 0){
      res.redirect('/signup');
    } else {
      next();
    }
    
    // Remove the 1 line below

  },
  (req, res) => {
    console.log('Sign up');
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    connection.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password],
      (error, results) => {
        req.session.userId = results.insertId;
        req.session.username = username;
        res.redirect('/list');
      }
    );
  }
);

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (results.length > 0) {
        if (req.body.password === results[0].password){
          req.session.userId = results[0].id;
          req.session.username = results[0].username;
          res.redirect('/list');
        } else {
          res.redirect('/login');
        }    
      } else {
        res.redirect('/login');
      }
    }
  );
});

app.get('/logout', (req, res) => {
  req.session.destroy(error => {
    res.redirect('/list');
  });
});

app.listen(3000);
