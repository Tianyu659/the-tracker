import express from 'express';
import { signup } from '../controllers/User.controller';

const router = express.Router();
router.post('/', (req, res) => {console.log("sanity checking...");});
router.post('/signup', signup);

/**
 * @export {express.Router} - router for User models
 */
export default router;