const express = require('express');
const app = express();
const path = require('path');
const PORT = 3200;

app.use(express.static(path.join(__dirname, '../dist/')))

app.listen(PORT, () => console.log(`Server listening on ${PORT}!`));