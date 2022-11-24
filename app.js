require('dotenv').config();

const Server = require('./models/serveer');


const server = new Server();


server.listen();