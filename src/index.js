const express = require('express')
const webRoutes = require('./routes/web')

const app = express()

app.use('/', webRoutes);

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});