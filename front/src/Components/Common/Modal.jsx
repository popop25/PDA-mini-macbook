import React, { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { TextInput } from "flowbite-react";
import { Button, Modal, Alert } from "react-bootstrap";
import User from "./User";

export default function ModalComp() {
  const [openModal, setOpenModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [isFundingPossible, setIsFundingPossible] = useState(true);
  const handleFundClick = () => {
    // 펀딩 api 요청을 보낸다

    // 1. 펀딩이 가능한 경우
    // setOpenModal(false)

    // 2. 펀딩 불가능한 경우
    setIsFundingPossible(false);
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
    <div className="flex flex-col items-center ">
      <div className="flex flex-wrap gap-4 w-[100%] items-center flex-col">
        <Button
          className=" bg-myColor-green3 border-none hover:bg-myColor-green2 w-[90%]"
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "6vh auto 0",
            gap: "10px",
          }}
        >
          <img
            src={product.imgUrl}
            style={{ width: "200px" }}
            alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzQJl-kKS5ov3MyAmp24jPxktGZJt9TAjDA&usqp=CAU"
          />
          <div className="text-gray-400 ">{product.brand}</div>
          <div>{product.title}</div>
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
          {!isFundingPossible && (
            <Alert variant="warning">후원 가능한 금액을 초과했어요!</Alert>
          )}
          <div className="d-flex">
            <Button
              onClick={() => handleFundClick()}
              className="border-none bg-myColor-green3 hover:bg-myColor-green2"
            >
              후원하기
            </Button>
            <Button
              className="ml-2 text-myColor-green3 border-myColor-green3 hover:border-myColor-green2 hover:bg-white hover:text-myColor-green2"
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
