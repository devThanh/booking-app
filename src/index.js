const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const methodOverride = require('method-override')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000


//app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(methodOverride('_method'))

app.engine('hbs', handlebars.engine({
    extname: '.hbs',  
    helpers: {
      sum: (a, b)=> a+b,
    }
  }));
  app.set('view engine', 'hbs'); 
  app.set('views', path.join(__dirname, 'resources','views'));




  const db = require('./config/db')
//connect to MongoDB
db.connect();


var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
route(app)

express.json();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
