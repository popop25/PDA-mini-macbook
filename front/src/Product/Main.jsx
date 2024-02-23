import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const baseUrl = "http://localhost:3001/api/product"; // URL에 오타 수정("http:" -> "http://")

  // useEffect를 사용하여 컴포넌트 마운트 시 데이터를 가져옵니다.
  useEffect(() => {
    // 비동기 데이터 로딩 함수
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);

        setProducts(response.data.products);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    fetchData();
  }, []); // baseUrl이 변경될 때마다 함수를 다시 실행

  return (
    <div className="container">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
        {products.map((el) => (
          <Card
            key={el._id}
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={el.imageUrl}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {el.brandName}
            </h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {el.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {el.price}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Product;
