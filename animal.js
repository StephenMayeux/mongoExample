const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animalSchema = new Schema({
  name: String
}, { timestamps: true })

const ModelClass = mongoose.model('animal', animalSchema)
module.exports = ModelClass
