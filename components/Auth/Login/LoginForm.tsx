'use client'

import { RegisterSchema } from "@/components/Schemas/register.schema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/FormUI/InputField";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/SVGIcons/Icons";
import { AuthLayout } from "../AuthLayout.tsx/AuthLayout";
import { LoginSchema } from "@/components/Schemas/login.schema";

const LoginForm = () => {
    const router = useRouter();

  
    const form = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    const [isLoading, setLoading] = useState(false);
  
    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
     
     console.log(values)
  
      router.push("/explore");

    };
  
    return (
      <AuthLayout
        title="Welcome back!"
        subtitle="Explore resources, connect and share with other students"
        link={"/"}
        linkCTA="Create an account"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 md:w-[400px] mb-6 w-full"
          >
            <InputField
              label="Email Address"
              control={form.control}
              name="email"
              placeholder="Enter your email address"
            
            />
           
            <InputField
              label="Password"
              control={form.control}
              name="password"
              placeholder="Now, your password"
              type="password"
            
            />
  
  
            <Button disabled={isLoading} type="submit" className="w-full mt-[70px!important] md:mt-[20px!important]">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} Start exploring
            </Button>
  
           
          </form>
        </Form>
      </AuthLayout>
    );
  };
  
  export default LoginForm;
  