"use client"
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const UserProfileButton = () => {
  const router = useRouter();
  return (
    <section className="flex items-center justify-between cursor-pointer" onClick={()=>router.push('/profile')}>
      <section className="flex items-center gap-2">
        <Avatar className="sm:w-8 sm:h-8">
          <AvatarImage
            src="/images/profile-photo.avif"
            alt="profile"
            className="object-cover"
          />
          <AvatarFallback>TZ</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="sm:text-xs">Thant Zin Win</h2>
          <p className="sm:text-[0.5rem] text-gray-500">
            thant.zin.windev@gamil.com
          </p>
        </div>
      </section>
      <IconChevronRight className="sm:w-3 sm:h-3 text-gray-500" />
    </section>
  );
};

export default UserProfileButton;
