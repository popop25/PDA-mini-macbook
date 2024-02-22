import React, { useState, useEffect } from "react";
import WishList from '../Components/WishList';
import { Row, Col } from 'react-bootstrap';
import { fetchWishes } from '../Api/WishApi';

export default function WishListPage() {
  const [myWishList, setMyWishList] = useState([]);

  // useEffect(() => {
  //     async function fetchData() {
  //         const data = await fetchWishes()    // user phoneNumber 전달
  //         setMyWishList(data)
  //     }
  //     fetchData()
  // }, [])

  return (
    <>
      <h2>나의 위시리스트</h2>
      <WishList
        imageUrl="https://img1.kakaocdn.net/thumb/C414x414@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240119113721_c2ec0eeb5cfe4f4fb72a7b4b4b99f538.jpg" 
        brandImageUrl="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800"
        brandName="하겐다즈"
        title="[단독]하겐다즈 프리미엄 수제 아이스크림 케이크 리얼블랑 (바닐라+벨지안초코)"
        price="32,900"
      />

      <Row>
        <Col md={2}>
          <div className="grid-container">
            {myWishList.map((myWish, index) => (
                <WishList key={index}
                  imageUrl={myWish.imageUrl}
                  brandImageUrl={myWish.brandImageUrl}
                  brandName={myWish.brandName}
                  title={myWish.title}
                  price={myWish.price}
                />
            ))}
          </div>
        </Col>
      </Row>
    </>
  )
}