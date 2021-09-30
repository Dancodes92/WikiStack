var express = require('express')
var app = express()
const morgan = require('morgan')
const layout = require ('./views/layout')
const { db } = require('./models');


app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + "/public"))


app.get('/', (req,res)=> {
  let emptyString =layout('');
  res.send(emptyString);
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


