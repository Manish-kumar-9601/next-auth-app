"use client"

import { useSession } from 'next-auth/react'
import React from 'react'


export const NavName = () => {
    const {status}=useSession();
 if(status==="authenticated"){
    <p>Sign In</p>
 }else if(status === 'unauthenticated'){
    <p>Sign out</p>

 }
   

 
  
}
