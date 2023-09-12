// import { foods } from "../data/food-data.js"
// import { foods } from "../data/food-data"
import { Food } from "../models/food.js"

function index(req, res) {
  Food.find({})
    .then(foods => {
      res.render('foods/index', {
        foods: foods
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')

    })

}

export {
  index
}