const express = require('express');

const projectsRouter = require('./api-routers/projects-router.js');
const actionsRouter = require('./api-routers/actions-router.js');

const server = express();

server.use(express.json());

server.use('/data/projects', projectsRouter);
server.use('/data/actions', actionsRouter);

server.get('/', (req, res) => {
    res.send(`
        <h2>Posts API</h>
      `);
  });

module.exports = server;