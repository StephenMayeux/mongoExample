const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Animal = require('./animal')

mongoose.connect('mongodb://localhost/animals')

app.get('/', (req, res) => {
  res.send('Give me a unique animal and I will save it to the database!')
})

app.get('/:animal', (req, res) => {
  const { animal } = req.params
  Animal.findOne({ animal }, (err, result) => {
    if (err) return res.status(500).send({ success: false, msg: 'Error reading database' })
    if (result) return res.status(422).send({ success: false, msg: 'Animal already exists in database.' })

    const newAnimal = new Animal({
      name
    })

    newAnimal.save(err) => {
      if (err) return res.status(500).send({ success: false, msg: 'Error saving to database' })
      res.send({ success: true, msg: 'Success saving a new animal to database!' })
    }
  })
})

const port = 3000
app.listen(port, () => {
  console.log('Listening on port', 3000)
})
