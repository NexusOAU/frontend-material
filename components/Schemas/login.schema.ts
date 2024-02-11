"use client"

import { z } from "zod"

const fetchEmails = () => {
    return ["stephen@learnium.com", "[adesola@learnium.com]"];
  };


export const LoginSchema = z.object({
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
      }, "Email does not exist"),
   // password

   password: z
   .string()
   .min(1, { message: "Password is required" })

  
})