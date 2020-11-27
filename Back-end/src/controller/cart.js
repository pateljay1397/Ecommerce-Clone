const Cart = require("../models/cart");

exports.addItemToCart = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((Error, cart) => {
    if (Error) return res.status(400).json({ Error });
    if (cart) {
      //If cart already exist then update cart by quantity
      //res.status(200).json({ message: cart });

      const product = req.body.cartItems.product;
      const item = cart.cartItems.find((c) => c.product == product);

      if (item) {
        Cart.findOneAndUpdate(
          { user: req.user._id, "cartItems.product": product },
          {
            $set: {
              cartItems: {
                ...req.body.cartItems,
                quantity: item.quantity + req.body.cartItems.quantity,
              },
            },
          }
        ).exec((Error, _cart) => {
          if (Error) return res.status(400).json({ Error });
          if (_cart) {
            return res.status(201).json({ cart: _cart });
          }
        });
      } else {
        Cart.findOneAndUpdate(
          { user: req.user._id },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          }
        ).exec((Error, _cart) => {
          if (Error) return res.status(400).json({ Error });
          if (_cart) {
            return res.status(201).json({ cart: _cart });
          }
        });
      }
    } else {
      //If cart not exist then create new cart
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      cart.save((Error, cart) => {
        if (Error) return res.status(400).json({ Error });
        if (cart) {
          return res.status(200).json({ cart });
        }
      });
    }
  });
};
