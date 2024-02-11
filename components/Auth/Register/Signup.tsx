import { Metadata } from "next";

import SignupForm from "./SIgnupForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function RegisterPage() {
  return (
    <>
      <SignupForm />
    </>
  );
}
