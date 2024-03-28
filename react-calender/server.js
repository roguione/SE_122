const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', "index.html"));
  });

  app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });

  // Always require and configure near the top 
  require('dotenv').config();

  require('./config/database');

