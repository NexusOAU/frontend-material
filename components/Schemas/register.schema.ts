"use client"

import { z } from "zod"

const fetchEmails = () => {
    return ["stephen@learnium.com", "[adesola@learnium.com]"];
  };
  
  export let passwordRegex = new RegExp(
    "^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@$#+^!%*?-]).{8,}$",
    "i"
  );

export const RegisterSchema = z.object({
  username: z.string().min(5,  {message: "username is required"}).max(15),

//   email
  email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({
        message: "Please enter a valid email address",
      })
      .refine(async (userInput) => {
        const emails = await fetchEmails();
        return !emails.includes(userInput);
      }, "Email Already Exist"),
   // password

   password: z
   .string()
   .min(1, { message: "Password is required" })
   .regex(passwordRegex, {
     message:
       "Oh no! Create a stronger password. HINT: Use a combination of uppercase, lowercase, symbols, and should be up to 8 characters.",
   }),

   //  confirm password
 confirmPassword: z
   .string()
   .min(1, { message: "Password confirmation is required." })
  
}) .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
