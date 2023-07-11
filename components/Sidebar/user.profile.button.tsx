import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconChevronRight } from "@tabler/icons-react";

const UserProfileButton = () => {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-2">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src="/images/profile-photo.avif"
            alt="profile"
            className="object-cover"
          />
          <AvatarFallback>TZ</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-sm">Thant Zin Win</h2>
          <p className="text-[0.7rem] text-gray-500">
            thant.zin.windev@gamil.com
          </p>
        </div>
      </div>
      <IconChevronRight className="w-4 h-4 text-gray-500" />
    </div>
  );
};

export default UserProfileButton;
