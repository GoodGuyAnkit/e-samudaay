const delivery_fees = [{
        high: 10000,
        price: 5000
    },
    {
        high: 20000,
        price: 10000
    },
    {
        high: 50000,
        price: 50000
    },
    {
        high: 100000,
        price: 100000
    },
];
const getDeliveryFee = (distance) => {
    return delivery_fees.find(fee => fee.high >= distance).price;
}

const calculateTotal = (req, res, next) => {
    try {
        const order = req.body;
        let order_total = 0;
        order.order_items.forEach((item) => {
            order_total += (item.price * item.quantity);
        });

        let delivery_fee = getDeliveryFee(order.distance);

        order_total += delivery_fee;

        let discount = 0;
        if (order.offer) {
            if (order.offer.offer_type === 'FLAT') {
                discount = order.offer.offer_val;
            } else if (order.offer.offer_type === 'DELIVERY') {
                discount = delivery_fee;
            }
        }
        discount = Math.min(discount, order_total);
        order_total -= discount;

        req.order_total = order_total;

        next();
    } catch (e) {
        res.status(400).send();
    }
}

export default calculateTotal;