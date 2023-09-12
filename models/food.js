import mongoose from "mongoose"

const Schema = mongoose.Schema

const foodSchema = new Schema({
  name: String,
  cuisine: String,
  vegeterian: Boolean
})

const Food = mongoose.model('Food', foodSchema)

export {
  Food
}