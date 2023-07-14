import React from "react";
import { Button } from "../ui/button";
import { IconPencilMinus } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ProfileBackgroundUploadModal from "./profile.background.upload.modal";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import UserProfileUploadModal from "./user.profile.upload.modal";

const ProfilePhotos:React.FC<ProfilePhotosProps> = ({
    profileUrl,profileHandler,backgroundUrl,backgroundHandler
}) => {
  return (
    <main className="lg:pt-6 sm:pl-2 xl:pl-14 w-full xl:pr-1 2xl:pr-4">
      <section className="flex w-full rounded-sm  lg:flex-col gap-[2.5rem] sm:gap-16 md:justify-between overflow-hidden">
        <section>
          <h4 className="text-xs sm:text-sm xl:text-lg mb-2 mt-7 lg:mt-0 font-semibold tracking-wide">
            Update Profile
          </h4>
          <p className="text-[0.55rem] sm:text-xs xl:text-sm mt-4 xl:mt-0 ">
            Profile of at least Size <span className="text-black">300x300</span>
          </p>
          <p className="mt-2 xl:mt-1 text-[0.55rem] sm:text-xs xl:text-sm ">
            Gifs work too.<span className="text-black">Max 5mb</span>
          </p>
        </section>
        <section className="cursor-pointer h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px]  md:w-[150px] xl:h-[135px] xl:w-[135px]">
          <UserProfileUploadModal url={profileUrl} fileHandler={profileHandler}/>
        </section>
      </section>
      <h4 className="text-xs sm:text-sm xl:text-lg mb-2 font-semibold tracking-wide mt-6 sm:mt-4 md:mt-6">
        Update Cover
      </h4>
      <p className="text-[0.65rem] sm:text-xs xl:text-sm">
        {" "}
        Cover of at least Size <span className="text-black">1170x920</span>
      </p>
      <section className="cursor-pointer">
        <ProfileBackgroundUploadModal url={backgroundUrl} fileHandler={backgroundHandler}/>
      </section>
    </main>
  );
};

export default ProfilePhotos;

interface ProfilePhotosProps {
    profileUrl:string,
    backgroundUrl:string,
    profileHandler:(data:any)=>void,
    backgroundHandler:(data:any)=>void
}
