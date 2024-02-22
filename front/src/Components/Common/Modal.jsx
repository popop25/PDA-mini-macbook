import React from 'react'
import { Button, Modal, TextInput  } from 'flowbite-react';
import { useState } from 'react';

export default function ModalComp({
    title = '반반 오리지널(한마리)',
    brand = '교촌치킨',
    imgUrl = 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230420140552_3d5d1caab29d4ad6a90537ea8c6e1c27.jpg',
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div style={{height: '100vh'}}>
      <div className="flex flex-wrap gap-4">
        <Button className=' bg-myColor-green2' onClick={() => setOpenModal(true)}>펀딩하기</Button>
      </div>
      <Modal
        show={openModal}
        position= 'center'
        onClose={() => setOpenModal(false)}
        className='flex items-center justify-center'
        style={{ paddingTop: '5vh' }}
      >
        {/* <Modal.Header> */}
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '6vh auto 0', gap: '10px'}}>
                <img src={imgUrl} style={{width: '240px'}} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzQJl-kKS5ov3MyAmp24jPxktGZJt9TAjDA&usqp=CAU" />
                <div className=' text-gray-400'>{brand}</div>
                <div>{title}</div>
            </div>
        {/* </Modal.Header> */}
        <Modal.Body>
          <div style={{width: '40vw', display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <TextInput style={{margin: '0 auto'}}></TextInput>
            <div>원</div>
          </div>
        </Modal.Body>
        <Modal.Footer className=' justify-center'>
          <Button onClick={() => setOpenModal(false)} className='bg-myColor-green2'>후원하기</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}