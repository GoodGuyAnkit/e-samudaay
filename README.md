# e-samudaay
### Instructions
  - The API takes an `order` object in raw json format and returns the `order_total`
  - Provide an object that goes something like this
```
{
    "order_items": [
        {
            "name": "sugar",
            "quantity": 2,
            "price": 7000
        },
        {
            "name": "coffee",
            "quantity": 1,
            "price": 5000
        }
    ],
    "distance": 36000,
    "offer": {
        "offer_type": "FLAT",
        "offer_val": "2000"
    }
}
```
  - `order_items` should contain an array with all the items in that order and each `item` should have the `name`, `quantity` and `price` of the item
  - `distance` should have an integer value representing distance in meters
  - `offer` is an optional property, inside which the `offer_type` can either have `FLAT` or `DELIVERY`
  - In case if the `offer_type` is `FLAT`, then `offer` should contain `offer_val` denoting the discount in paise
  - The resulting `order_total` will be in paise
```
{
    "order_total": 67000
}
```
