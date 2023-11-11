"use client";
import React from "react";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import { useSession } from "next-auth/react";
import { NextAuthProvider } from "../Provider";

const AuthSign = () => {
  const { status } = useSession();
  
 


   if (status === "authenticated") {
      return 
      <NextAuthProvider>
      <SignOut />

      </NextAuthProvider> 
    } else if (status === "unauthenticated") {
      return  <NextAuthProvider>
      <SignIn />

      </NextAuthProvider> 
    } else if (status === "loading") {
      <p>LOADING PLEASE WAIT </p>;
    }


}

export default AuthSign;
