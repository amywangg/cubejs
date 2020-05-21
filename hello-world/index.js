const CubejsServerCore = require('@cubejs-backend/server-core');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

// config the database '.env' file
require('dotenv').config();

const app = express();

app.use(require('cors')());
app.use(bodyParser.json({ limit: '50mb' }));
// create cubejs server and init express app
const cubejsServer = CubejsServerCore.create();
cubejsServer.initApp(app);

// create a new server to join express and cubejs
const server = http.createServer({}, app);
// generate jwt
const jwt = require('jsonwebtoken');

// endpoint to get authentication tokent
app.get('/auth/cubejs-token', (req, res) => {
  res.json({
    // u is USER_CONTEXT which allows for filtering
    // allows for multiple parameters to be filtered through (see schemas)
    token: jwt.sign({ u: { id: req.query.user } }, process.env.CUBEJS_API_SECRET, { expiresIn: '10m' })
  })
})

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`🚀 Cube.js server (${CubejsServerCore.version()}) is listening on ${port}`);
});
