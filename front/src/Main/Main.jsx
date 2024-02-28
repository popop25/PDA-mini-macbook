/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Friends from "../Components/Main/Friends";
import WishLists from "../Components/Main/WishLists";
import { fetchUserFriends } from "../Api/UserApi";
import { fetchWishes } from "../Api/WishApi";

const Main = () => {
  const [friends, setFriends] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendList = await fetchUserFriends();
        setFriends(friendList);
      } catch (error) {
        console.error("Error fetching user friends:", error);
      }
    };

    fetchFriends();
  }, []);

  useEffect(() => {
    if (phoneNumber === "") {
      return;
    }
    const fetchWishLists = async () => {
      try {
        const wishListData = await fetchWishes(phoneNumber);
        setWishList(wishListData);
      } catch (error) {
        console.error("Error fetching user friends:", error);
      }
    };

    fetchWishLists();
  }, [phoneNumber]);

  return (
    <div className="flex bg-gradient-to-r from-yellow-100 to-green-100 mt-[-24px] mb-[-36px]">
      <div className="h-screen sticky left-0 top-0 overflow-y-auto">
        <Friends friends={friends} setPhoneNumber={setPhoneNumber} />
      </div>
      <WishLists
        wishList={wishList.isWishList}
        fundings={wishList.fundings}
        birthDay={wishList.birthDay}
      />
    </div>
  );
};

export default Main;
