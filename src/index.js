import express from 'express';
import calculateTotal from '../middleware/calculateTotal.js';
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.post('/order', calculateTotal, (req, res) => {
    res.send({ 'order_total': req.order_total });
})

app.listen(port, () => {
    console.log('Listening on port', port, '...');
})