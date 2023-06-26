import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.quotes))
});

router.get('/:quoteId', (req, res) => {
    return res.send(req.context.models.quotes[req.params.quoteId])
});

router.post('/', (req, res) => {
    const id = uuidv4();
    const quote = { id, ...req.body }
    req.context.models.quotes[id] = quote;

    return res.send(quote);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const deleted = req.context.models.quotes[id];
    delete req.context.models.quotes[id];
    res.send(deleted);
});

export default router;