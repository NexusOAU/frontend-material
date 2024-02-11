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

const SignupForm = () => {
    const router = useRouter();
  
   
  
    const form = useForm<z.infer<typeof RegisterSchema>>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
  
    const [isLoading, setLoading] = useState(false);
  
    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
     
     console.log(values)
  
      router.push("/onboarding");

    };
  
    return (
      <AuthLayout
        title="Create an account"
        subtitle="Join a community of learners, support, and success"
        link={"/auth/login"}
        linkCTA="Sign In"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 md:w-[400px] mb-6 w-full"
          >
            <InputField
              label="Choose a username"
              control={form.control}
              name="username"
              placeholder="Choose a username"
            
            />
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
              placeholder="Create a password"
              type="password"
            
            />
  
            <InputField
              inputMode="text"
              label="Re-type Password"
              control={form.control}
              name="confirmPassword"
              placeholder="Confirm your password"
              type="password"
            
            />
  
  
            <Button disabled={isLoading} type="submit" className="w-full">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} Create an account
            </Button>
  
           
          </form>
        </Form>
      </AuthLayout>
    );
  };
  
  export default SignupForm;
  