"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IconPencilMinus } from "@tabler/icons-react";
import FileInput from "./FileInput";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProfileBackgroundUploadModal: React.FC<Props> = ({
  url,
  fileHandler,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="group bg-blackA3 inline-flex h-[200px] w-full lg:w-full xl:w-full 2xl:w-full  select-none items-center justify-center overflow-hidden  align-middle mt-2 relative  rounded-md">
        <IconPencilMinus className="text-white h-5 w-5 absolute  top-[45%] left-[45%] z-30 bg-inherit hidden group-hover:block" />

        <Avatar className=" h-full w-full rounded-md group-hover:blur-[2px] transition-all">
          <AvatarImage
            src={
              url === ""
                ? "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                : url
            }
            className="h-full w-full rounded-[inherit] object-cover"
            alt="Cover Photo"
          />
          <AvatarFallback
            delayMs={600}
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-slate-400 text-[15px] font-medium"
          >
            BG
          </AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent>
        <FileInput handler={fileHandler} />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileBackgroundUploadModal;
interface Props {
  url: string;
  fileHandler: (data: any) => void;
}
