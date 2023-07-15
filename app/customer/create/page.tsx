"use client"
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

import ProfileInput from "@/app/profile/profile.input";
import DateInput from "@/components/CustomerListsComponents/DateInput";
import SelectGender from "@/components/CustomerListsComponents/SelectGender";
import { Button } from "@/components/ui/button";
import ButtonUtil from "@/components/utils/ButtonComponent/Button";
const FormSchema = z.object({
  fullname: z.string().min(2, "Name must have at least 2 characters"),
  nrc: z.string().min(13, "Name must have at least 13 characters"),
  phoneNo: z.string().min(10, "Name must have at least 10 characters"),
  email: z.string().email("Invalid email"),
  city: z.string().min(2, "City must have at least 2 characters"),
  township: z.string().min(2, "Township must have at least 2 characters"),
  address: z.string().min(2, "Address must have at least 2 characters"),
  jobTitle: z.string().min(2, "Job Title must have at least 2 characters"),
  gender: z
  .string({
    required_error: "Please select the gender of the customer",
  }),
  dob:z.date({
    required_error: "A date of birth is required.",
  }),
});


function onSubmit(data: z.infer<typeof FormSchema>) {
  console.log("data", data);
}

const CreateCustomerPage = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  
  return (
    <main className="flex  justify-center w-full h-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-8 w-[90%] lg:w-[80%] mx-auto bg-slate-50 rounded-lg mt-14 shadow-lg"
        >
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8">
                <ProfileInput
                    name="fullname"
                    control={form.control}
                    label="Full Name"
                    placeholder="Enter customer fullname"
                />
                 <ProfileInput
                    name="nrc"
                    control={form.control}
                    label="NRC"
                    placeholder="Enter customer NRC"
                />
                 <ProfileInput
                    name="phoneNo"
                    control={form.control}
                    label="Phone Number"
                    placeholder="Enter customer phone number"
                />
                 <ProfileInput
                    name="email"
                    control={form.control}
                    label="Email"
                    placeholder="Enter customer email"
                />
                 <ProfileInput
                    name="city"
                    control={form.control}
                    label="City"
                    placeholder="Enter customer city"
                />
                 <ProfileInput
                    name="township"
                    control={form.control}
                    label="Township"
                    placeholder="Enter customer township"
                />
                 <ProfileInput
                    name="address"
                    control={form.control}
                    label="Address"
                    placeholder="Enter customer address"
                />
                 <ProfileInput
                    name="jobTitle"
                    control={form.control}
                    label="Job Title"
                    placeholder="Enter customer job title"
                />
                <SelectGender name="gender" control={form.control}/>
                <DateInput name="dob" control={form.control}/>
            </section>
            <section className="flex justify-end mt-8 gap-3">
              <ButtonUtil name="Cancel" onClick={()=>{}} type="button" className="bg-transparent text-blue-600 hover:bg-slate-100" />
              <ButtonUtil name="Create" onClick={()=>{}} type="submit" className="bg-blue-600 text-white hover:bg-blue-700" />
            </section>
        </form>
      </Form>
    </main>
  );
};

export default CreateCustomerPage;
