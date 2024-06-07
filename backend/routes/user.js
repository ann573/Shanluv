import express from 'express'
import { 
    updateUser,
    deleteUser,
    getUser,
    getAllUser

} from '../controllers/userController.js'

const router = express.Router()

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);
router.get('/', getAllUser);
export default router