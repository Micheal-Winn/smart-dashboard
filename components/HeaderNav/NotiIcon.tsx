import React from "react";
import { IconBellRinging, IconMessage } from "@tabler/icons-react";

const NotiIcon = () => {
  return (
    <button className="relative hidden md:block">
      <IconBellRinging className="h-6 w-6" />
      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[0.6rem] font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
        8
      </div>
    </button>
  );
};

export default NotiIcon;
