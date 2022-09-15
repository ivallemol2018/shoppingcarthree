const express = require('express')
const session = require('express-session')
const passport = require('./middlewares/passport-local')
const MongoStore = require('connect-mongo')
const logger = require('./utils/log4').getLogger()
const loggerNotFound = require('./utils/log4').getLogger("warn")
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const apiProduct = require('./routes/productRoutes')
const apiShoppingCart = require('./routes/shoppingCartRoutes')

const app = express()

const PORT = process.env.PORT || 8080

app.use(bodyParser.json());

app.use(session({
  store: new MongoStore({
      mongoUrl: keys.hostDbEcommerce,
      ttl: 60
  }),
  secret: 'dumbledure',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/productos',apiProduct)
app.use('/api/carrito',apiShoppingCart)

app.post(
  '/api/login',
  passport.authenticate('login', { failureRedirect: '/', failureMessage: true}),
  (request,response)=>{
    const {username} = request.body

    request.session.username = username

    response.status(200).json({message:'succesful',username})
})

app.post(
  '/api/logout',
  (request,response)=>{

  request.session.destroy(()=>{
    response.status(200).json({message:'succesful'})
  })
})

app.post(
  '/api/signup',
  passport.authenticate('signup',{ failureRedirect: '/signup', failureMessage: true}),
  (request,response)=>{
    const {username} = request.body

    request.session.username = username

    response.status(200).json({message:'succesful',username})
})


if(process.env.NODE_ENV === 'production'){
  //Express will serve up production assets
  //like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  //Express will serve up the index.html file
  //if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });    
}

const server = app.listen(PORT,()=>{
  console.log(`Server http on ${PORT}...`)
})

server.on('error',error=> console.log('Error on server',error))