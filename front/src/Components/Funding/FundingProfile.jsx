import React from "react";
import { Avatar } from "flowbite-react";
import { Badge } from "flowbite-react";

const FundingProfile = ({ amount, userInfo }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", { style: "decimal" }).format(price);
  };

  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="w-[90%] min-w-[50px] h-[120px]  rounded-full">
        <Avatar
          rounded
          className="h-[120px] content-center"
          size="lg"
          bordered
          color="gray"
        />
      </div>
      {userInfo}님
      <div className="w-[90%] h-[50px] text-center rounded-lg mt-2">
        <Badge
          color="success"
          className="flex items-center justify-center text-center text-[16px]"
        >
          ₩{formatPrice(amount)}
        </Badge>
      </div>
    </div>
  );
};

export default FundingProfile;
