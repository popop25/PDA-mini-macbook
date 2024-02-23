// import { Card } from 'flowbite-react';

export default function Funder({ nickname, amount }) {
  return (
    // <Card className="max-w-sm">
    <div className="flex flex-col items-center pb-10">
      <img
        alt="profile"
        height="120"
        src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800"
        width="120"
        className="mb-3 rounded-full shadow-lg"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {nickname}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {amount}원
      </span>
    </div>
    // </Card>
  );
}
