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
    return new Intl.NumberFormat("en-US", { style: "decimal" }).format(price);
  };

  const onWishClick = () => {
    if (isHeart) {
      alert("위시리스트에서 삭제되었습니다.");
    } else {
      alert("위시리스트에 추가되었습니다.");
    }
    setIsHeart((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProductDetail(productId);
      console.log(response);
      setProductDetail(response);
    };
    fetchData();
  }, []);

  const htmlCode = productDetail[0]?.productDetailDescription;

  const cleanCode = sanitizeHtml(htmlCode, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "iframe",
      "video",
    ]), // 'iframe', 'video' 태그 추가
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
      ], // 'iframe' 태그에 대해 허용할 속성들 추가
      video: [
        "src",
        "width",
        "height",
        "controls",
        "autoplay",
        "loop",
        "muted",
      ], // 'video' 태그에 대해 허용할 속성들 추가
    },
  });

  return (
    <div className="flex flex-col items-center justify-center mt-4 ">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex justify-center items-center w-[400px] h-[350px]">
          <Card
            className="max-w-sm h-[350px] "
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={productDetail[0]?.detailImageUrl}
          ></Card>
        </div>

        <div>
          <Card href="#" className=" max-w-sm w-[400px] h-[350px] ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productDetail[0]?.detailName}
            </h5>
            <div className="mb-3 mt-2.5 flex items-center">
              <Avatar
                className="w-[30px] h-[30px]"
                img={productDetail[0]?.brandImageUrl}
                alt="avatar of Jese"
                rounded
              />
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {productDetail[0]?.brandName}
              </span>
            </div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ₩{formatPrice(productDetail[0]?.price)}
            </span>
            <Button onClick={onWishClick}>
              위시리스트 담기
              <div className="ml-2" />
              {isHeart ? (
                <img
                  src={heart_full}
                  alt="이미지 오류"
                  width={15}
                  height={15}
                />
              ) : (
                <img src={heart} alt="이미지 오류" width={15} height={15} />
              )}
            </Button>
          </Card>
          <div>
            <div dangerouslySetInnerHTML={{ __html: cleanCode }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
