import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { IconPencilMinus } from '@tabler/icons-react';
import FileInput from './FileInput';

const UserProfileUploadModal:React.FC<Props> = ({
    url,fileHandler
}) => {
  return (
    <Dialog>
        <DialogTrigger className='relative group bg-blackA3 inline-flex w-full h-full select-none items-center justify-center overflow-hidden rounded-full align-middle '>
        <IconPencilMinus className="text-white h-5 w-5 absolute  top-[45%] left-[45%] z-30 bg-inherit hidden group-hover:block" />
        <Avatar className=" w-full h-full rounded-full ">
            <AvatarImage
              src={url === '' ? "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60": url}
              className="h-full w-full rounded-[inherit] object-cover group-hover:blur-[2px] transition-all"
              alt="Profile Photo"
            />
            <AvatarFallback
              className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-slate-400 text-[15px] font-medium"
              delayMs={600}
            >
              TZ
            </AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent>
            <FileInput handler={fileHandler}/>
        </DialogContent>
    </Dialog>
  )
}

export default UserProfileUploadModal;

interface Props{
    url:string,
    fileHandler:(data:any)=>void,

}