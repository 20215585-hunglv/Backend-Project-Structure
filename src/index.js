const express = require('express')
const webRoutes = require('./routes/web')
const configViewEngine = require('./config/viewEngine');
const app = express()

configViewEngine(app);

app.use('/', webRoutes);

app.listen(3000, () => {
    console.log('Server đang chạy tại port 3000');
});