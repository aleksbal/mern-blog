import express from 'express';
import test from '../controllers/user.controller.js';

const router = express.Router();

const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
  
router.use(timeLog)

router.get('/test', test)

export default router;