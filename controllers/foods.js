import { Food } from "../models/food.js"

function index(req, res) {
  Food.find({})
    .then(foods => {
      res.render('foods/index', {
        foods: foods,
        time: req.time
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}
function newFood(req,res){
res.render('foods/new')
}

function create(req, res) {
  req.body.spicy = false
  Food.create(req.body)
  .then(food => {
    res.redirect('/foods')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/foods')
  })
}
function show(req,res){
  Food.findById(req.params.foodId)
  .then(food =>{
    res.render('foods/show',{
      food:food
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/foods')
  })
}
function deleteFood(req,res){
  Food.findByIdAndDelete(req.params.foodId)
  .then(food =>{
    res.redirect('/foods')

  })
  .catch(error => {
    console.log(error)
    res.redirect('/foods')
  })
}

function edit(req,res){
  Food.findById(req.params.foodId)
  .then(food => {
    res.render('foods/edit',{
      food:food
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/foods')
  })
}


export {
  index,
  newFood as new,
  create,
  show,
  deleteFood as delete,
  edit,

}