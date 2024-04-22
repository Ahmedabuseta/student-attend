"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import axios from "axios";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

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
    .min(16, {
      message: "nationalId must be  16 number.",
    })
    .max(16, {
      message: "nationalId must be  16 number.",
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
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "sdddddd",
      address: "sddvsdv",
      phone: "01025654889",
      nationalId: "1532695485691256",
      garaduateYear: "2222",
      goal: "zeeeeeooooooooooooooo",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { phone, nationalId } = data;

    const phoneKey = phone.slice(0, 2);
    const nationalIdKey = nationalId.slice(0, 2);

    try {
      if (nationalIdKey !== "20" || phoneKey !== "01" ){
        toast({
          title: "الرقم القومي او الهاتف غير صحيح",
          variant: "destructive",
        });
      }else{
        await axios.post("/api/add-user", data);
        toast({
          title: "tmam ya comnda",
        });
      }
      
    } catch (error) {
      console.log(error);
      toast({
        title: "bayza ya comnda",
        variant: "destructive",
      });
    }
  }
  interface iFields {
    label: string;
    name:
      | "username"
      | "address"
      | "phone"
      | "nationalId"
      | "garaduateYear"
      | "goal";
    type: string;
  }
  const inputFields: iFields[] = [
    {
      label: "الاسم",
      name: "username",
      type: "text",
    },
    {
      label: "العنوان",
      name: "address",
      type: "text",
    },
    {
      label: "رقم الهاتف",
      name: "phone",
      type: "number",
    },
    {
      label: "الرقم القومي",
      name: "nationalId",
      type: "number",
    },
    {
      label: "خريج سنه",
      name: "garaduateYear",
      type: "number",
    },
    {
      label: "هدفك",
      name: "goal",
      type: "text",
    },
  ];
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[600px] space-y-4 p-6 m-auto relative top-10 "
      >
        {inputFields.map((inputField) => {
          return (
            <FormField
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

        <Button type="submit" className="w-1/2 block m-auto">
          Submit
        </Button>
      </form>
    </Form>
  );
}
