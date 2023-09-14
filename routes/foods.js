import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'
const router = Router()

// GET localhost:3000/users
router.get('/', foodsCtrl.index)
router.get('/new',foodsCtrl.new)
router.get('/:foodId',foodsCtrl.show)
router.get('/:foodId/edit',foodsCtrl.edit)
router.post('/',foodsCtrl.create)
router.delete('/:foodId',foodsCtrl.delete)


export { router }
