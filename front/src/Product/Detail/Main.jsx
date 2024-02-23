import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Avatar } from "flowbite-react";
import heart from "../../imgs/heart.svg";
import heart_full from "../../imgs/heart_full.svg";

const ProductDetail = () => {
  const { productId } = useParams();
  const [isHeart, setIsHeart] = useState(false);
  const title = "교촌치킨 허니콤보";
  const price = 20000;
  const brandName = "교촌치킨";
  const brandImageUrl =
    "https://i.namu.wiki/i/3e5TEQoolMpO3zscf6Pekp0J8VJQGLb6tLcIy9FfLIzle7mV4PyeLmXRqjzC_Pl9B4G8i3vQG3Cv1uZOFKoBqm1hjK69VrbtzGUUfwpvgQXzPlk-W5X1eFWQxQTcXe7VRhKz2FBZDyg7Z_MBKm5L4Q.svg";
  const imageUrl =
    "https://i.namu.wiki/i/UIwyVNxsFF7wq_RQTHPswOnGWMiAecEQn7-UWUFQZT3DDjJ_nKWgESBmH2qD5kT1wus_DsTRlSzS_LIqhMW97-cf7jZUdGUsvI2BjrRNyxpFrKUEqNh5mqAmR0ygZ2HtEkOvy3KmvOfKXLMyQyocxQ.webp";

  const onWishClick = () => {
    if (isHeart) {
      alert("위시리스트에서 삭제되었습니다.");
    } else {
      alert("위시리스트에 추가되었습니다.");
    }
    setIsHeart((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4 ">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex justify-center items-center w-[400px] h-[350px]">
          <Card
            className="max-w-sm h-[350px] "
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={imageUrl}
          ></Card>
        </div>

        <div>
          <Card href="#" className=" max-w-sm w-[400px] h-[350px] ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <div className="mb-3 mt-2.5 flex items-center">
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
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price}₩
            </span>
            <Button onClick={onWishClick}>
              위시리스트 담기
              <div className="ml-2" />
              {isHeart ? (
                <img src={heart_full} width={15} height={15} />
              ) : (
                <img src={heart} width={15} height={15} />
              )}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
