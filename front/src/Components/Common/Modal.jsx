import React, { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { TextInput } from "flowbite-react";
import { Button, Modal, Alert } from "react-bootstrap";
import User from "./User";

export default function ModalComp() {
  const [openModal, setOpenModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [isFundingPossible, setIsFundingPossible] = useState(true);
  const [openAmountAlert, setOpenAmountAlert] = useState(false);
  const handleFundClick = () => {
    // 입력된 후원 금액이 숫자인지 확인
    if (!isNaN(amount) && parseFloat(amount) >= 0) {
      // 펀딩 api 요청을 보낸다

      // 1. 펀딩이 가능한 경우
      // setOpenModal(false)

      // 2. 펀딩 불가능한 경우
      setIsFundingPossible(false);
      setOpenAmountAlert(false); // Alert를 닫습니다.
    } else {
      // 숫자가 아니거나 0 이상의 숫자가 아닌 경우
      setIsFundingPossible(true); // 기존 Alert 상태 초기화
      setOpenAmountAlert(true); // Alert 표시 상태 업데이트
    }
  };

  // 예시입니다.
  const product = {
    title: "반반 오리지널(한마리)",
    brand: "교촌치킨",
    imgUrl:
      "https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230420140552_3d5d1caab29d4ad6a90537ea8c6e1c27.jpg",
  };
  const friend = {
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&usqp=CAU",
    userEmail: "example@gmail.com",
    nickName: "김영석",
    phoneNumber: "01012345678",
    birthDay: "950814",
    isWishList: [123, 456, 789],
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="flex flex-wrap gap-4">
        <Button
          className=" bg-myColor-green3 border-none hover:bg-myColor-green2"
          onClick={() => setOpenModal(true)}
        >
          펀딩하기
        </Button>
      </div>
      <Modal
        show={openModal}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setOpenModal(false)}
        centered
      >
        <Modal.Header closeButton className="mx-auto">
          <Modal.Title id="contained-modal-title-vcenter">
            <User friend={friend}></User>
          </Modal.Title>
        </Modal.Header>
        <div className="flex flex-col items-center mt-6">
          <img
            src={product.imgUrl}
            className="hover:cursor-pointer hover:bg-gray-100"
            style={{ width: "200px" }}
            alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzQJl-kKS5ov3MyAmp24jPxktGZJt9TAjDA&usqp=CAU"
          />
          <div className=" text-gray-400">{product.brand}</div>
          <div className="font-bold">{product.title}</div>
        </div>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40px",
            }}
          >
            <TextInput
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ height: "40px", padding: "0 10px", fontSize: "20px" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleFundClick();
                }
              }}
            ></TextInput>
            <div>원</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-column align-items-center">
          {openAmountAlert && (
            <Alert variant="warning">0 이상의 금액을 입력해주세요!</Alert>
          )}
          {!isFundingPossible && (
            <Alert variant="warning">후원 가능한 금액을 초과했어요!</Alert>
          )}
          <div className="d-flex">
            <Button
              onClick={() => handleFundClick()}
              className="bg-myColor-green3 border-none hover:bg-myColor-green2"
            >
              후원하기
            </Button>
            <Button
              className="text-myColor-green3 border-myColor-green3 hover:border-myColor-green2 hover:bg-white hover:text-myColor-green2 ml-2"
              onClick={() => setOpenModal(false)}
            >
              취소
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
