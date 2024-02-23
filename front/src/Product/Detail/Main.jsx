import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";
import { Avatar } from "flowbite-react";

const ProductDetail = () => {
  const { productId } = useParams();
  const title = "교촌치킨 허니콤보";
  const price = 20000;
  const brandName = "교촌치킨";
  const brandImageUrl =
    "https://i.namu.wiki/i/3e5TEQoolMpO3zscf6Pekp0J8VJQGLb6tLcIy9FfLIzle7mV4PyeLmXRqjzC_Pl9B4G8i3vQG3Cv1uZOFKoBqm1hjK69VrbtzGUUfwpvgQXzPlk-W5X1eFWQxQTcXe7VRhKz2FBZDyg7Z_MBKm5L4Q.svg";
  const imageUrl =
    "https://i.namu.wiki/i/UIwyVNxsFF7wq_RQTHPswOnGWMiAecEQn7-UWUFQZT3DDjJ_nKWgESBmH2qD5kT1wus_DsTRlSzS_LIqhMW97-cf7jZUdGUsvI2BjrRNyxpFrKUEqNh5mqAmR0ygZ2HtEkOvy3KmvOfKXLMyQyocxQ.webp";
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-row">
        <Card
          className="max-w-sm"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={imageUrl}
        >
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <Avatar
              className="w-[30px] h-[30px]"
              img={brandImageUrl}
              alt="avatar of Jese"
              rounded
            />
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              {brandName}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price}₩
            </span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div>
        </Card>
        <div className="m-2" />
        <div>
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <div className="m-3" />
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
