import React, { useEffect, useState } from "react";
import Mobile from "./components/Mobile";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          name: item.title,
          image: item.image,
          rating: item.rating?.rate || "4.0",
          reviews: item.rating?.count || 100,
          reviewCount: item.rating?.count || 50,
          specs: ["Good quality", "Best performance", "Best value"],
          price: `₹${Math.round(item.price * 80)}`,
          originalPrice: `₹${Math.round(item.price * 100)}`,
          offer: "20% off",
          exchange: "₹2000",
          bankOffer: "Bank offer available",
        }));

        setProducts(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return <Mobile category="Mobiles" products={products} />;
}

export default App;
