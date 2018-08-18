const fs = require('fs');
const express = require('express');
const app = express();

const customerData = fs.readFileSync('json/customer.json', 'utf8');


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.send(customerData)
})

app.listen(8000, () => {
    console.log('Server start on port 8000')
})
