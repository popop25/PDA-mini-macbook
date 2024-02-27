import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { addFriend } from "../../Api/UserApi";
import Swal from "sweetalert2";

function AddFriend() {
  const [openModal, setOpenModal] = useState(false);
  const [number, setNumber] = useState("");
  const handleAddButtonClick = async () => {
    try {
      await addFriend(number);
      Swal.fire({
        icon: "success",
        title: "친구 추가 성공!",
        text: `친구가 성공적으로 추가되었습니다.`,
      }).then(() => window.location.reload());
      setOpenModal(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "친구 추가 실패",
        text: "친구 추가 중 오류가 발생했습니다.",
      });
    }
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        type="submit"
        className="inline-flex justify-center px-4 py-2 text-sm font-bold text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        친구 추가
      </button>
      <Modal
        show={openModal}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setOpenModal(false)}
        centered
      >
        <Modal.Header className="mx-auto w-[248px]">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center w-100"
          >
            친구 추가
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="010-1234-5678"
              style={{
                height: "40px",
                padding: "0 10px",
                fontSize: "20px",
                border: "solid #CCCCCC 1px",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddButtonClick();
                }
              }}
            ></input>
            <p>휴대폰 번호를 입력해주세요.</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-column align-items-center">
          <div className="d-flex">
            <Button
              onClick={handleAddButtonClick}
              className="border-none bg-myColor-green2 hover:bg-myColor-green1"
            >
              친구 추가
            </Button>
            <Button
              className="ml-2 text-myColor-green2 border-myColor-green2 hover:border-myColor-green1 hover:bg-white  hover:text-myColor-green1 focus:border-myColor-green1"
              onClick={() => setOpenModal(false)}
            >
              취소
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFriend;
