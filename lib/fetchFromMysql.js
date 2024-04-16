const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  port: process.env.PORT,
  user: process.env.WORDPRESS_USERNAME,
  password: process.env.WORDPRESS_PASSWORD,
  database: 'fmlnsuecia_se',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Define API endpoint to fetch data from MySQL
app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM wp_posts WHERE post_type = "post" AND post_status = "publish" ORDER BY post_date DESC LIMIT 10', (error, results, fields) => {
    if (error) {
      console.error('Error querying MySQL: ' + error.stack);
      res.status(500).send('Error fetching data from database');
      return;
    }
    const news = results.map(post => ({
      title: post.post_title,
      description: post.post_content.substring(0, 100), // Example: Take first 100 characters as description
      date: post.post_date,
      author: post.post_author,
      // Add more properties as needed
    }));

    res.json(news);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});