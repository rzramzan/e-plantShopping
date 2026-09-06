import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function NavigationBar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <span className="brand-mark">🌿</span>
        Paradise Nursery
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">
          <span>🛒</span>
          Cart
          <span className="cart-count">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Welcome to Paradise Nursery</p>
          <h1>Bring the beauty of nature into your home.</h1>
          <p className="hero-text">
            Discover carefully selected houseplants, aromatic herbs and
            air-purifying greenery for every space.
          </p>
          <Link className="get-started" to="/plants">
            Get Started
          </Link>
        </div>
      </section>
      <AboutUs />
    </main>
  );
}

function CartPage() {
  return <CartItem />;
}

export default function App() {
  return (
    <div className="app">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <footer className="footer">
        <p>Paradise Nursery • React + Redux Shopping Application</p>
      </footer>
    </div>
  );
}