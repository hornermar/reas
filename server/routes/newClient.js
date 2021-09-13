import express from 'express';
import { getClients, createClient } from '../controllers/newClient.js';

const router = express.Router();

router.get('/', getClients);
router.post('/', createClient);

export default router;
