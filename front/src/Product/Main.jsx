import React from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <Link to={"/product/123"} className="grid grid-cols-4 gap-4">
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc=""
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          brand Name
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          title
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">price</p>
      </Card>
    </Link>
  );
};

export default Product;
