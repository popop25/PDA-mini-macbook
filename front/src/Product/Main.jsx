import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const baseUrl = "http://localhost:3001/api/product";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setProducts(response.data.products);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    fetchData();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", { style: "decimal" }).format(price);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-green-100 p-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center w-full max-w-6xl">
        {products.map((el) => (
          <Card
            key={el._id}
            className="max-w-sm w-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            imgAlt="Product image"
            imgSrc={el.imageUrl}
          >
            <h5 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400">
              {el.brandName}
            </h5>
            <p className="text-sm font-bold tracking-tight text-transparent bg-clip-text text-yellow-500">
              {el.title}
            </p>
            <h2 className="font-normal text-gray-700 dark:text-gray-400">
              ₩{formatPrice(el.price)}
            </h2>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Product;
