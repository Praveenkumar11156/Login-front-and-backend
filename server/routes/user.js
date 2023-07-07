import { register,login,getAllUser} from "../controller/user.js";
import express from 'express'

const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/viewall',getAllUser)

export default router