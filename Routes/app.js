const express = require('express');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(adminRouter);

app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).send('<p>Page not found!</p>');
});

app.listen(3000);

