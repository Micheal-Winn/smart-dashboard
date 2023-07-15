"use client"
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
import { Input } from "@/components/ui/input";
const FormSchema = z.object({
  accountNo: z.string({
    required_error: "Account Number is required",
  }),
  accountType: z.string({
    required_error: "Name is required",
  }),
  amount: z.string({
    required_error: "Amount is required",
  }),
});

const DepositeModal = ({accountNum}:{accountNum:string}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      accountNo: accountNum,
    },
  });

  return (
    <Dialog>
      <DialogTrigger className="sm:text-[0.6rem] xl:text-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold sm:px-2 sm:py-1 xl:px-3  xl:py-2 rounded-full">Deposite</DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(console.log)}>
            <section className="grid grid-cols-2 gap-x-6 gap-y-4">
              <FormField
                control={form.control}
                name="accountNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-[0.8rem] xl:text-md">Amount No</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" disabled {...field} className="sm:py-1 xl:py-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-[0.8rem] xl:text-md">Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} className="sm:py-1 xl:py-2" />
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
                      <Input placeholder="0.00" {...field} className="sm:py-1 xl:py-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
            <div className="flex justify-end mt-4">
                <ButtonUtil name="Deposite" type="submit" className="bg-blue-600 hover:bg-blue-700"/>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DepositeModal;
