"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import ProfileInput from "./profile.input";

//shadcn Form
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

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

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <div className="bg-slate-50 h-screen">
      <Form {...form}>
        <form className="pt-6 pl-4 xl:pl-3 pr-2 sm:pr-5 pb-5 mb-4  xl:pb-10 mt-4 xl:mr-10 2xl:mr-20 shadow-slate-300 shadow-lg mx-3 bg-white rounded-lg">
          <h3 className="font-semibold sm:text-base md:text-lg xl:text-2xl">
            Profile Information
          </h3>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-[70%]">
              <Separator className="my-3" />
              <div className="xl:ml-8">
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
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
                <h3 className="my-4 text-black font-semibold tracking-wide text-xs xl:text-base">
                  Personal Work
                </h3>
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
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
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
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
            </div>
            <div className=" w-full lg:w-[30%]"></div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default page;
