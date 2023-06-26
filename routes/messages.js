import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.messages))
});

router.get('/:messageId', (req, res) => {
    return res.send(req.context.models.messages[req.params.messageId])
});

router.post('/', (req, res) => {
    console.log(req.body);
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        serverMessage: req.serverMessage,
    }
    req.context.models.messages[id] = message;

    return res.send(message);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const deleted = req.context.models.messages[id];
    delete req.context.models.messages[id];
    res.send(deleted);
});

export default router;