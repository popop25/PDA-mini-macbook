import React from "react";
import User from "../Common/User";
import AddFriend from "./AddFriend";

export default function Friends({ friends, setPhoneNumber }) {
  return (
    <div className=" min-h-[38rem] w-96 p-4 bg-white border border-gray-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className=" font-bold text-2xl ps-8 pb-8">
        친구
        <span className="font-medium text-lg"> ({friends.length})</span>
        <AddFriend />
      </div>
      {friends.map((friend) => {
        return <User friend={friend} setPhoneNumber={setPhoneNumber}></User>;
      })}
    </div>
  );
}
