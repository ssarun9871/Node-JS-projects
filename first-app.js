const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const error = require('./controllers/error');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

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
app.use(error.get404);

app.listen(2000);
