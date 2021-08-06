const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./mailer')
const PORT = process.env.PORT || 5000

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', express.static(`${__dirname}/static`))

app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/createOrder', bodyParser.json(), (req, res) => {
  mailer.sendOrder(
    req.body.userFirstName,
    req.body.userLastName,
    req.body.userPhone,
    req.body.userCity,
    req.body.userPostDepartment,
    req.body.items
  )

  res.send('succesfull')
})

app.post('/sendContactMessage', bodyParser.json(), (req, res) => {
  mailer.sendContactMessage(
    req.body.userName,
    req.body.userEmail,
    req.body.userMessage,
  )

  res.send('succesfull')
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
