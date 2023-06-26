import { Router } from "express";
import userRoutes from './users';
import messageRoutes from './messages';
import quoteRoutes from './quotes'

const router = Router();

router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
router.use('/quotes', quoteRoutes);

export default router;