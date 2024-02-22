import React from "react";
import { Card } from "react-bootstrap";
export default function User({ friend }) {
  const month = friend.birthDay.slice(3, 4); // 생년월일에서 월 추출
  const day = friend.birthDay.slice(4); // 생년월일에서 일 추출

  return (
    <Card className="gap-4 hover:bg-gray-100 flex-row items-center border-none py-2">
      <img
        className="w-12 h-12 object-cover rounded-full ms-8"
        src={friend.profileImg}
        alt=""
      />
      <span className="me-8">
        <Card.Text>{friend.nickName}</Card.Text>
        <Card.Text className="text-slate-500">
          {month}월 {day}일
        </Card.Text>
      </span>
    </Card>
  );
}
