import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { addFriend } from "../../Api/UserApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

function AddFriend() {
  const [openModal, setOpenModal] = useState(false);
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
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
      <Button
        className="bg-myColor-green3 border-none hover:bg-myColor-green2 w-[90%]"
        onClick={() => setOpenModal(true)}
      >
        친구 추가
      </Button>
      <Modal
        show={openModal}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setOpenModal(false)}
        centered
      >
        <Modal.Header closeButton className="mx-auto">
          <Modal.Title id="contained-modal-title-vcenter">
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
              style={{ height: "40px", padding: "0 10px", fontSize: "20px" }}
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
              className="border-none bg-myColor-green3 hover:bg-myColor-green2"
            >
              친구 추가
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
    </>
  );
}

export default AddFriend;
