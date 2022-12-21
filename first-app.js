const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const error = require('./controllers/error');
const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUs = require('./routes/contactUs')
const success = require('./routes/success')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(contactUs);
app.use(shopRoutes);
app.use(success);
app.use(error.status404);

app.listen(3000);
