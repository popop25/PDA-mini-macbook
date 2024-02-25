import React, { useEffect, useState } from "react";
import Friends from "../Components/Main/Friends";
import WishLists from "../Components/Main/WishLists";
import axios from "axios";
import { fetchUserFriends } from "../Api/UserApi";

const Main = () => {
  const [friends, setFriends] = useState([]);
  const [wishLists, setWishLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const friendsData = await fetchUserFriends();
        setFriends(friendsData);
        console.log(friendsData);
      } catch (error) {
        console.error("Error fetching user friends:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex">
      <Friends friends={friends} />
      <WishLists />
    </div>
  );
};

export default Main;
