import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Avatar } from "flowbite-react";
import heart from "../../imgs/heart.svg";
import heart_full from "../../imgs/heart_full.svg";
import { fetchProductDetail } from "../../Api/ProductDetailApi";
import sanitizeHtml from "sanitize-html";

const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [isHeart, setIsHeart] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "KRW",
    }).format(price);
  };

  const onWishClick = () => {
    alert(
      isHeart
        ? "위시리스트에서 삭제되었습니다."
        : "위시리스트에 추가되었습니다."
    );
    setIsHeart(!isHeart);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProductDetail(productId);
      setProductDetail(response);
    };
    fetchData();
  }, [productId]);

  const htmlCode = productDetail[0]?.productDetailDescription;
  const cleanCode = sanitizeHtml(htmlCode, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "iframe",
      "video",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "data-animated", "data-origin-url"],
      iframe: [
        "src",
        "width",
        "height",
        "frameborder",
        "allowfullscreen",
        "allow",
      ],
      video: [
        "src",
        "width",
        "height",
        "controls",
        "autoplay",
        "loop",
        "muted",
      ],
    },
  });

  return (
    <div className="flex flex-col items-center justify-center mt-4 w-full bg-gradient-to-r from-yellow-100 to-green-100">
      <div className="flex flex-row justify-center items-start mb-20 gap-4 w-full max-w-4xl">
        <Card
          className="w-[400px] h-[350px]"
          imgAlt="Product image"
          imgSrc={productDetail[0]?.detailImageUrl}
        />
        <div className="max-w-sm w-[400px] flex flex-col justify-start">
          <Card className="h-[350px]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productDetail[0]?.detailName}
            </h5>
            <div className="mb-3 mt-2.5 flex items-center">
              <Avatar
                className="w-[30px] h-[30px]"
                img={productDetail[0]?.brandImageUrl}
                alt="Brand logo"
                rounded
              />
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {productDetail[0]?.brandName}
              </span>
            </div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {formatPrice(productDetail[0]?.price)}
            </span>
            <Button onClick={onWishClick} className="mt-4">
              위시리스트 담기
              <img
                className="ml-2"
                src={isHeart ? heart_full : heart}
                alt="위시리스트 아이콘"
                width={15}
                height={15}
              />
            </Button>
          </Card>
        </div>
      </div>
      <div className="w-full max-w-4xl mt-6">
        <div dangerouslySetInnerHTML={{ __html: cleanCode }}></div>
      </div>
    </div>
  );
};

export default ProductDetail;
