const express = require('express');
const app = express();

// req body JSON parsing middleware
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => console.log(`Express running on http://localhost:${PORT}`))

// ----------------------------------------------------------------------

app.get('/data', (req, res) => {

	console.log('GET reguest to /data')

	res.status(200).send({data: 'here is some data!'})
});