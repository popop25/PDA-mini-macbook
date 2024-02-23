import React from "react";
import Friends from "../Components/Main/Friends";
import WishLists from "../Components/Main/WishLists";

const WishList = () => {
  return (
    <div className="flex">
      <Friends />
      <WishLists />
    </div>
  );
};

export default WishList;
