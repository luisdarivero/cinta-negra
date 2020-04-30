const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

//recibir cosas desde el campo body
server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.get('/', (req, res) => res.status(201).send('hello world'));

//Crud usuario

const Users = require('../models/Users');

server.post('/api/v1/users', (req, res)=>{
   Users.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => res.status(400).send({message: 'error creating user', err}))
   ; 
});

//get all users
server.get('/api/v1/users', (req, res)=>{
    Users.find()
     .then(users => res.status(201).send(users))
     .catch(err => res.status(404).send({message: 'error getting all users', err}))
    ; 
 });

//se exporta el objeto server para requerirlos desde otros archivos
module.exports = {server, PORT};