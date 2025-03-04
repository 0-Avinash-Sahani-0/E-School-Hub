import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./css-style/Store.css";

const Store = () => {
  const products = useMemo(() => [
    { id: 1, name: "Math Workbook", price: "₹299", image: "/images/math-book.jpg", desc: "Improve math skills with fun exercises." },
    { id: 2, name: "Science Kit", price: "₹799", image: "/images/science-kit.jpg", desc: "Explore science experiments at home." },
    { id: 3, name: "English Grammar Guide", price: "₹399", image: "/images/english-book.jpg", desc: "Master English grammar with ease." },
    { id: 4, name: "Stationery Set", price: "₹199", image: "/images/stationery.jpg", desc: "A complete set for schoolwork." },
    { id: 5, name: "Coding for Kids", price: "₹999", image: "/images/coding-book.jpg", desc: "Learn coding with simple exercises." },
    { id: 6, name: "Drawing Kit", price: "₹349", image: "/images/drawing-kit.jpg", desc: "Boost creativity with this art set." },
    { id: 7, name: "Puzzle Set", price: "₹499", image: "/images/puzzle-set.jpg", desc: "Fun and challenging puzzle set." },
    { id: 8, name: "Story Books Collection", price: "₹899", image: "/images/story-books.jpg", desc: "Engaging stories for young readers." },
    { id: 9, name: "Educational Flashcards", price: "₹259", image: "/images/flashcards.jpg", desc: "Learn through visual memory aids." },
  ], []);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const purchaseItem = (product) => {
    alert(`Purchased: ${product.name} for ${product.price}`);
  };

  return (
    <motion.div
      className="store-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="store-title">Online Store</h2>
      
      {/* Store Grid Layout - 3 items per row */}
      <div className="store-grid">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="store-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={product.image} alt={product.name} className="store-image" />
            <h3 className="store-item-name">{product.name}</h3>
            <p className="store-item-price">{product.price}</p>
            <p className="store-item-desc">{product.desc}</p>
            <button className="store-button" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="store-button purchase" onClick={() => purchaseItem(product)}>Buy Now</button>
          </motion.div>
        ))}
      </div>

      {/* Display Cart */}
      {cart.length > 0 && (
        <div className="cart-container">
          <h3>Shopping Cart ({cart.length})</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - {item.price}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Store;
