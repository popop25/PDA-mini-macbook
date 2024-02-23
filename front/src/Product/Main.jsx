import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      Product
      <Link
        to={"/product/11111"}
        className="w-[200px] bg-black rounded-lg text-white"
      >
        상품 A 상세페이지 가기
      </Link>
    </div>
  );
};

export default Product;
