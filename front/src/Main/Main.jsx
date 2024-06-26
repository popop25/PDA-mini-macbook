/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Friends from "../Components/Main/Friends";
import WishLists from "../Components/Main/WishLists";
import { fetchUserFriends } from "../Api/UserApi";
import { fetchWishes } from "../Api/WishApi";

const Main = () => {
  const [friends, setFriends] = useState([]);
  const [filteredFriends, setFilteredFriends] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(null); // Initialize as null to allow deselection
  const [searchTerm, setSearchTerm] = useState(""); // Initialize search term

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendList = await fetchUserFriends();
        setFriends(friendList);
        filterFriends(friendList, selectedMonth, searchTerm);
      } catch (error) {
        console.error("Error fetching user friends:", error);
      }
    };

    fetchFriends();
  }, []);

  useEffect(() => {
    filterFriends(friends, selectedMonth, searchTerm);
  }, [selectedMonth, searchTerm, friends]);

  useEffect(() => {
    if (phoneNumber === "") {
      return;
    }
    const fetchWishLists = async () => {
      try {
        const wishListData = await fetchWishes(phoneNumber);
        setWishList(wishListData);
      } catch (error) {
        console.error("Error fetching wish lists:", error);
      }
    };

    fetchWishLists();
  }, [phoneNumber]);

  const filterFriends = (friends, month, searchTerm) => {
    const today = new Date();
    let filtered = friends;

    if (month !== null) {
      filtered = friends.filter((friend) => {
        const friendMonth = new Date(friend.birthDay).getMonth() + 1;
        return friendMonth === month;
      });
    }

    if (searchTerm) {
      filtered = filtered.filter((friend) =>
        friend.nickName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered = filtered.sort((a, b) => {
      const aDate = new Date(a.birthDay);
      const bDate = new Date(b.birthDay);
      return aDate.getDate() - bDate.getDate();
    });

    const todayFriends = filtered.filter((friend) => {
      const friendDate = new Date(friend.birthDay);
      return (
        friendDate.getMonth() === today.getMonth() &&
        friendDate.getDate() === today.getDate()
      );
    });

    const otherFriends = filtered.filter(
      (friend) => !todayFriends.includes(friend)
    );
    setFilteredFriends([...todayFriends, ...otherFriends]);
  };

  return (
    <div className="flex min-h-screen">
      <div className="ml-12 m-10 w-96">
        <Friends
          className="bg-white"
          friends={filteredFriends}
          setPhoneNumber={setPhoneNumber}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
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
