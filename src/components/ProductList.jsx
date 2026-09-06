import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";

const plants = [
  {
    id: "air-1",
    name: "Snake Plant",
    category: "Air Purifying",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b2b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "air-2",
    name: "Peace Lily",
    category: "Air Purifying",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "air-3",
    name: "Spider Plant",
    category: "Air Purifying",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "air-4",
    name: "Rubber Plant",
    category: "Air Purifying",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1597055181300-8e1510f6e9f1?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "air-5",
    name: "Areca Palm",
    category: "Air Purifying",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "air-6",
    name: "Boston Fern",
    category: "Air Purifying",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "aro-1",
    name: "Basil",
    category: "Aromatic",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "aro-2",
    name: "Rosemary",
    category: "Aromatic",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "aro-3",
    name: "Lavender",
    category: "Aromatic",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "aro-4",
    name: "Mint",
    category: "Aromatic",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1ae?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "aro-5",
    name: "Thyme",
    category: "Aromatic",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "aro-6",
    name: "Lemon Balm",
    category: "Aromatic",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "med-1",
    name: "Aloe Vera",
    category: "Medicinal",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "med-2",
    name: "Jade Plant",
    category: "Medicinal",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "med-3",
    name: "Echeveria",
    category: "Medicinal",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1519180399-6f3b1f2c6a7a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "med-4",
    name: "Kalanchoe",
    category: "Medicinal",
    price: 20.99,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "med-5",
    name: "String of Pearls",
    category: "Medicinal",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "med-6",
    name: "Haworthia",
    category: "Medicinal",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80"
  }
];

const categories = [...new Set(plants.map((plant) => plant.category))];

function ProductCard({ plant, isAdded, onAdd }) {
  return (
    <article className="product-card">
      <img src={plant.image} alt={plant.name} />
      <div className="product-body">
        <span className="category-label">{plant.category}</span>
        <h3>{plant.name}</h3>
        <div className="product-footer">
          <strong>${plant.price.toFixed(2)}</strong>
          <button
            type="button"
            disabled={isAdded}
            className={isAdded ? "add-button added" : "add-button"}
            onClick={() => onAdd(plant)}
          >
            {isAdded ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartIds = new Set(cartItems.map((item) => item.id));

  const handleAdd = (plant) => {
    if (!cartIds.has(plant.id)) {
      dispatch(addToCart(plant));
    }
  };

  return (
    <main className="products-page">
      <div className="page-heading">
        <p className="eyebrow">Plant collection</p>
        <h1>Shop our houseplants</h1>
        <p>
          Browse our categories and add your favorite plants to your shopping
          cart.
        </p>
      </div>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="category-section" key={category}>
            <div className="category-heading">
              <h2>{category}</h2>
              <span>{categoryPlants.length} plants</span>
            </div>

            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                  isAdded={cartIds.has(plant.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}