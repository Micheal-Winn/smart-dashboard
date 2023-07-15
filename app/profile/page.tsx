"use client";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import ProfileInput from "./profile.input";

//shadcn Form
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import ProfilePhotos from "@/components/profileComponents/profile.photos";
import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IconLogout ,IconUser,IconUserCircle} from "@tabler/icons-react";

//Image state

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Email is not valid" }),
  phoneNo: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" }),
  department: z
    .string()
    .min(2, { message: "Department must be at least 2 characters" }),
  position: z
    .string()
    .min(2, { message: "Position must be at least 2 characters" }),
  role: z.string().min(2, { message: "Role must be at least 2 characters" }),
  managerName: z
    .string()
    .min(2, { message: "Manager Name must be at least 2 characters" }),
  managerPhone: z
    .string()
    .min(10, { message: "Manager Phone must be at least 10 characters" }),
  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  township: z
    .string()
    .min(2, { message: "Township must be at least 2 characters" }),
});

const ProfilePage = () => {
  const [base64ProfileUrl, setBase64ProfileUrl] = useState<string>("");
  const [base64BackgroundUrl, setBase64BackgroundUrl] = useState<string>("");
  const profileHandler = (data: any) => {
    console.log("imagedata", data);
    if (data) {
      const file = data.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64ProfileUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const backgroundHandler = (data: any) => {
    if (data) {
      const file = data.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64BackgroundUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data",data)
  }

  return (
    <main className="bg-slate-50 h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="pt-6 pl-4 xl:pl-3 pr-2 sm:pr-5 pb-2 mb-4  xl:pb-2 mt-4 xl:mr-10 2xl:mr-20 shadow-slate-300 shadow-lg mx-3 bg-white rounded-lg ">
          <h3 className="font-semibold sm:text-base md:text-lg xl:text-2xl">
            Profile Information
          </h3>
          <section className="flex gap-4 flex-col lg:flex-row">
            <section className="w-full lg:w-[70%]">
              <Separator className="my-3" />
              <div className="xl:ml-8">
                <div className="grid md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
                  <ProfileInput
                    name="username"
                    control={form.control}
                    label="FullName"
                    placeholder="Enter your Full Name"
                  />
                  <ProfileInput
                    name="email"
                    control={form.control}
                    label="Email"
                    placeholder="Enter your Email Address"
                  />
                  <ProfileInput
                    name="phoneNo"
                    control={form.control}
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                  />
                </div>
                <h3 className="my-4 text-black font-semibold tracking-wide text-sm xl:text-base">
                  Personal Work
                </h3>
                <div className="grid md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
                  <ProfileInput
                    name="department"
                    control={form.control}
                    label="Department"
                    placeholder="Enter your Department"
                  />
                  <ProfileInput
                    name="position"
                    control={form.control}
                    label="Position"
                    placeholder="Enter your Position"
                  />
                  <ProfileInput
                    name="role"
                    control={form.control}
                    label="Role"
                    placeholder="Enter your Role"
                  />
                  <ProfileInput
                    name="managerName"
                    control={form.control}
                    label="Manager Name"
                    placeholder="Enter your Manager Name"
                  />
                  <ProfileInput
                    name="mangerPhone"
                    control={form.control}
                    label="Manager Phone Number"
                    placeholder="Enter your Manager Phone Number"
                  />
                </div>
                <h3 className="my-4 text-black font-semibold tracking-wide text-xs xl:text-base">
                  {" "}
                  Personal Address
                </h3>
                <div className="grid md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
                  <ProfileInput
                    name="address"
                    control={form.control}
                    label="Address"
                    placeholder="Enter your Address"
                  />
                  <ProfileInput
                    name="city"
                    control={form.control}
                    label="City"
                    placeholder="Enter your City"
                  />
                  <ProfileInput
                    name="township"
                    control={form.control}
                    label="Township"
                    placeholder="Enter your Township"
                  />
                </div>
              </div>
            </section>
            <section className=" w-full lg:w-[30%]">
              <ProfilePhotos
                profileUrl={base64ProfileUrl}
                profileHandler={profileHandler}
                backgroundUrl={base64BackgroundUrl}
                backgroundHandler={backgroundHandler}
              />
            </section>
          </section>
          <section className="flex items-center justify-between ml-auto sm:w-[230px] 2xl:w-[260px] my-2">
            <Button className="bg-red-500  hover:bg-red-600 text-xs py-1 sm:py-1" type="button">
              <IconLogout className=" sm:w-3 sm:h-3 lg:w-4   lg:h-4 mr-2" />
              LogOut</Button>
            <Button   className="bg-blue-700 hover:bg-blue-600 text-xs px-4 sm:py-1" type="submit">
              <IconUserCircle className=" sm:w-3 sm:h-3 lg:w-4   lg:h-4 mr-2" />
              Save Profile</Button>
          </section>
        </form>
      </Form>
    </main>
  );
};

export default ProfilePage;
