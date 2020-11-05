const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

// Middleware Body parser, todo lo que llega lo convierte en formato JSON
app.use(express.json());

moviesApi(app);

app.listen(config.port, () => {
    console.log(`listen http://localhost:${config.port}`);
});