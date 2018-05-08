const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//setup mongoose to connect to the database mongoDB
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/friendDB').then(mongo => {
  console.log('connected to database');
}).catch(err => {
  console.log('Error connecting to database', err);
});

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));
