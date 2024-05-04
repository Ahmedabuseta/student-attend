"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import axios from "axios";
import { COMPILER_INDEXES } from "next/dist/shared/lib/constants";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { inputFields, governorates } from "./data/data";
import { useState } from "react";
import Loading from "@/components/loading";


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "address must be at least 2 characters.",
  }),
  phone: z
    .string()
    .min(11, {
      message: "phone must be  11 number.",
    })
    .max(11, {
      message: "phone must  most 11 number.",
    })
    .regex(/^[0-9]*$/, {
      message: "Only numbers are allowed in phone.",
    }),
  nationalId: z
    .string()
    .min(14, {
      message: "nationalId must be  14 number.",
    })
    .max(14, {
      message: "nationalId must be  14 number.",
    })
    .regex(/^[0-9]*$/, {
      message: "Only numbers are allowed in phone.",
    }),
  garaduateYear: z
    .string()
    .min(4, {
      message: "garaduateYear must be at least 4 numbers.",
    })
    .regex(/^[0-9]*$/, {
      message: "Only numbers are allowed in phone.",
    }),
  goal: z
    .string()
    .min(10, {
      message: "comingFrom must be at least 10 characters.",
    })
    .max(300, {
      message: "goal must be at most 300 characters.",
    }),
  governate: z.string(),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      address: "",
      phone: "",
      nationalId: "",
      garaduateYear: "",
      goal: "",
      governate: "",
    },
  });

  const [loading,setLoading] = useState<Boolean>(false);
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { phone, nationalId } = data;

    const phoneKey = phone.slice(0, 2);
    const nationalIdKey = nationalId.slice(0, 2);

    try {
      setLoading(true)
      if (nationalIdKey !== "30" || phoneKey !== "01") {
        toast({
          title: "الرقم القومي او الهاتف غير صحيح",
          variant: "destructive",
        });
      } else {
        await axios.post("/api/add-user", data);
        toast({
          title: "تم ادخال البيانات بنجاح",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "حدث خطأ ما , حاول مره اخري",
        variant: "destructive",
      });
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="pt-8 relative">

   
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[600px] space-y-4 p-6 m-auto relative top-10 "
      >
        {loading && <Loading />}
        {inputFields.map((inputField, index) => {
          return (
            <FormField
              key={index}
              control={form.control}
              name={
                inputField.name as
                  | "username"
                  | "address"
                  | "phone"
                  | "nationalId"
                  | "garaduateYear"
                  | "goal"
              }
              render={({ field }) => (
                <FormItem className=" text-right">
                  <FormLabel className="font-bold">
                    {inputField.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={inputField.label}
                      className="text-right"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}

        <FormField
          control={form.control}
          name="governate"
          render={({ field }) => (
            <FormItem className=" text-right">
              <FormLabel className="font-bold">المحافظه</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue  className=" text-right" placeholder=" محافظة ايه" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {governorates.map((governorate) => (
                    <SelectItem key={governorate.code} defaultChecked value={governorate.name}>
                      {governorate.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading as boolean} type="submit" className= { `w-1/2 block m-auto ${loading && ' cursor-not-allowed' } `}>
          Submit
        </Button>
      </form>
    </Form>)
    </div>
  );
}
