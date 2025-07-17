import React, { useEffect, useState } from "react";
import "./LoadMoreData.css";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setdisabled] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  function disableButton() {
    if (products && products.length === 100) setdisabled(true);
  }

  async function fetchProducts() {
    try {
      console.log("Fetching products...");
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="wrapper">
      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} width="150" />
            <p>{product.title}</p>
          </div>
        ))}
        <button disabled={disableButton}>Load More</button>
      </div>
    </div>
  );
};

export default LoadMoreData;
