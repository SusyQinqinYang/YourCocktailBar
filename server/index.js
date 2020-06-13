const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../dist/')))

app.get('/#', (request, response) => {
	response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(PORT, () => console.log(`Server listening on ${PORT}!`));