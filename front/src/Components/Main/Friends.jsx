import React, { useState } from "react";
import User from "../Common/User";
import AddFriend from "./AddFriend";
import "./Friends.css";

export default function Friends({ friends, setPhoneNumber }) {
  const [isNarrow, setIsNarrow] = useState(false);

  const toggleNarrowView = () => {
    setIsNarrow(!isNarrow);
  };
  return (
    <div className={`friends-container py-4 ${isNarrow ? "narrow-view" : ""}`}>
      <div className="toggle-button" onClick={toggleNarrowView}>
        <p>{isNarrow ? "▶" : "◀"}</p>
      </div>
      {!isNarrow && (
        <div className="">
          <div className="header">
            <div className="info">
              <div className="title">친구</div>
              <span className="text-lg font-medium">({friends.length})</span>
            </div>
            <AddFriend />
          </div>
          {!isNarrow && (
            <div className="friend-list">
              {friends.map((friend) => (
                <User
                  key={friend.id}
                  friend={friend}
                  setPhoneNumber={setPhoneNumber}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
