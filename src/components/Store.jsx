import { useState } from "react";
import { motion } from "framer-motion";
import "./css-style/Store.css";

const Store = () => {
  const [products] = useState([
    { id: 1, name: "Math Workbook", price: "₹299", image: "/images/math-book.jpg" },
    { id: 2, name: "Science Kit", price: "₹799", image: "/images/science-kit.jpg" },
    { id: 3, name: "English Grammar Guide", price: "₹399", image: "/images/english-book.jpg" },
    { id: 4, name: "Stationery Set", price: "₹199", image: "/images/stationery.jpg" },
    { id: 5, name: "Coding for Kids", price: "₹999", image: "/images/coding-book.jpg" },
  ]);

  return (
    <motion.div
      className="store-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="store-title">Online Store</h2>
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
            <button className="store-button">Add to Cart</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Store;
