"use client";
import { SessionProvider, signIn, signOut } from "next-auth/react";
import React from "react";
import { UserInfo } from "./UserInfo";
import AuthSign from "./AuthSign";
 

export const HomeSign = () => {
  return (
    <>
      <SessionProvider>
        <div className="bg-white h-52 flex justify-center items-center ">
          <UserInfo />
 
          <AuthSign />
        </div>
      </SessionProvider>
    </>
  );
};
