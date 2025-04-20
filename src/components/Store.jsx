import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./css-style/Store.module.css";


const Store = () => {
  const navigate = useNavigate();
  const products = useMemo(() => [
    { id: 1, name: "Math Workbook", price: "₹299", image: "/images/MathWorkbook.png", desc: "Improve math skills with fun exercises." },
    { id: 2, name: "Science Kit", price: "₹799", image: "/images/ScienceKits.jpg", desc: "Explore science experiments at home." },
    { id: 3, name: "English Grammar Guide", price: "₹399", image: "/images/english-book.png", desc: "Master English grammar with ease." },
    { id: 4, name: "Stationery Set", price: "₹199", image: "/images/stationery.jpg", desc: "A complete set for schoolwork." },
    { id: 5, name: "Coding for Kids", price: "₹999", image: "/images/coding-book.jpg", desc: "Learn coding with simple exercises." },
    { id: 6, name: "Drawing Kit", price: "₹349", image: "/images/drawing-kit.jpg", desc: "Boost creativity with this art set." },
    { id: 7, name: "Puzzle Set", price: "₹499", image: "/images/puzzle-set.jpg", desc: "Fun and challenging puzzle set." },
    { id: 8, name: "Story Books Collection", price: "₹899", image: "/images/story-books.jpg", desc: "Engaging stories for young readers." },
    { id: 9, name: "Educational Flashcards", price: "₹259", image: "/images/flashcards.jpg", desc: "Learn through visual memory aids." },
  ], []);

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const purchaseItem = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    alert(`Redirecting to payment for "${product.name}"`);
    navigate("/payment");
  };

  const purchaseCart = () => {
    if (cart.length === 0) return alert("Your cart is empty!");
    const total = cart.reduce((acc, item) => acc + parseInt(item.price.replace("₹", "")), 0);
    const confirm = window.confirm(`Total: ₹${total}\nProceed to payment?`);
    if (confirm) {
      localStorage.setItem("selectedProduct", JSON.stringify(cart));
      setCart([]);
      navigate("/payment");
    }
  };

  return (
    <motion.div
      className={styles.storeContainer}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.storeTitle}>Online Store</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      {/* Product List */}
      <div className={styles.storeGrid}>
        {filteredProducts.map((product) => (
          <motion.div key={product.id} className={styles.storeItem} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src={product.image} alt={product.name} className={styles.storeImage} />
            <h3 className={styles.storeItemName}>{product.name}</h3>
            <p className={styles.storeItemPrice}>{product.price}</p>
            <p className={styles.storeItemDesc}>{product.desc}</p>
            <button className={styles.storeButton} onClick={() => addToCart(product)}>Add to Cart</button>
            <button className={`${styles.storeButton} ${styles.purchase}`} onClick={() => purchaseItem(product)}>Buy Now</button>
          </motion.div>
        ))}
      </div>

      {/* Shopping Cart */}
      {cart.length > 0 && (
        <div className={styles.cartContainer}>
          <h3>Shopping Cart ({cart.length})</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
                <button
                  className={styles.cartBuyButton}
                  onClick={() => purchaseItem(item)}
                >
                  Buy
                </button>
              </li>
            ))}
          </ul>
          <button className={styles.purchaseAllButton} onClick={purchaseCart}>Buy All</button>
        </div>
      )}
    </motion.div>
  );
};

export default Store;
