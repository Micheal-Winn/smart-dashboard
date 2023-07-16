"use client";
import React from "react";
import {
  Dialog,
  DialogContent,

  DialogTrigger,
} from "@/components/ui/dialog";
import { IconPlus } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ButtonUtil from "@/components/utils/ButtonComponent/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  accountType: z.string({
    required_error: "Account type is required",
  }),
  name: z.string({
    required_error: "Name is required",
  }),
  amount: z.string({
    required_error: "Amount is required",
  }),
});

const CreateBankAccountModal = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-3 sm:gap-1 2xl:gap-3 bg-blue-600 text-white py-2 sm:px-2 xl:px-3 sm:py-2 xl:py-2  rounded-sm  text-xs sm:text-[0.63rem] xl:text-xs justify-center mb-3 md:mb-0 mt-3">
        <IconPlus className="sm:h-4 sm:w-4" />
        <span>Create Account</span>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:w-auto rounded-md">
        <Form {...form}>
          <form className="">
            <section className="grid md:grid-cols-2 gap-x-6 gap-y-4">
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel  className="sm:text-[0.8rem] xl:text-md">Select Account</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Account Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="savingAccount">
                        Saving Account
                      </SelectItem>
                      <SelectItem value="depositeAccount">
                        Deposite Account
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sm:text-[0.8rem] xl:text-md">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} className="sm:py-1 xl:py-2"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sm:text-[0.8rem] xl:text-md">Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} className="sm:py-1 xl:py-2"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </section>
            <div className="flex justify-end items-center mt-3 md:mt-0">
            <ButtonUtil name="Create" className="bg-blue-600 hover:bg-blue-700" type="submit"/>
          </div>
          </form>
         
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBankAccountModal;
