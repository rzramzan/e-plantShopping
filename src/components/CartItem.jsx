import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from "../store/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="cart-page empty-cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <p className="eyebrow">Your basket is waiting</p>
          <h1>Your Shopping Cart is Empty</h1>
          <p>Add plants from the product listing to see them here.</p>
          <Link className="get-started" to="/plants">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="page-heading">
        <p className="eyebrow">Your selection</p>
        <h1>Shopping Cart</h1>
        <p>{totalItems} total item(s) in your cart.</p>
      </div>

      <div className="cart-layout">
        <section className="cart-list">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-product-info">
                <span className="category-label">{item.category}</span>
                <h3>{item.name}</h3>
                <p>Unit price: ${item.price.toFixed(2)}</p>

                <div className="quantity-controls">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-row-actions">
                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Cart Summary</h2>
          <div className="summary-line">
            <span>Total Items</span>
            <strong>{totalItems}</strong>
          </div>
          <div className="summary-line summary-total">
            <span>Total Cost</span>
            <strong>${totalCost.toFixed(2)}</strong>
          </div>

          <button
            type="button"
            className="checkout-button"
            onClick={() => window.alert("Coming Soon")}
          >
            Checkout
          </button>

          <Link className="continue-button" to="/plants">
            Continue Shopping
          </Link>

          <button
            type="button"
            className="clear-button"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </aside>
      </div>
    </main>
  );
}