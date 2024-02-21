import React from 'react';
import { Card } from 'flowbite-react';
// import { fetchWishes } from '../../Api/WishApi';

export default function User({ nickname = '김영석', birthDay = '950814', id }) {  // id는 api 보낼 때 쓰기 위함
  const month = birthDay.slice(3, 4); // 생년월일에서 월 추출
  const day = birthDay.slice(4); // 생년월일에서 일 추출

  const handleClick = () => {
    // id를 가지고 axios 요청을 보냅니다
    // fetchWishes(id)
  }

  return (
    <Card className="max-w-sm text hover:bg-gray-100" onClick={handleClick}> {/*max-w-sm이 가로 사이즈에요*/}
      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          <img
            alt="/"
            height="32"
            src="https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-4.jpg&w=32&q=75"
            width="32"
            className="rounded-full cursor-pointer"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-gray-900 dark:text-white cursor-default">{nickname}</p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400 cursor-default">{month}월 {day}일</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-400 dark:text-white text-decoration-none cursor-default">{'>'}</div>
      </div>
    </Card>
  );
}
