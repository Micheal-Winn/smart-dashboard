"use client"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'

const ProfileInput:React.FC<LabelProps> = ({
    label,control,placeholder,name
}) => {
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-slate-500 sm:text-[0.73rem] md:text-[0.7rem] xl:text-[0.8rem] tracking-wide">{label}</FormLabel>
              <FormControl>
                <Input className='placeholder:text-sm text-sm' placeholder={`${placeholder}`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  )
}

export default ProfileInput
interface LabelProps {
    label: string;
    control?: any;
    placeholder: string;
    name:string
  }