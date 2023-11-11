"use client"
import React from 'react'
import { SignIn } from './SignIn'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { SignOut } from './SignOut'


export const UserInfo = () => {

  const {status,data:session}=useSession();


 if (status === "authenticated") {
  return <div className='secondary-color '>
  <Image  src={session?.user?.image} width={60} height={60} alt='user'/>
  <label className='text-white'> {session?.user?.name} </label>
  <label className='text-white'> {session?.user?.email} </label>

   </div>
 }else if(status ==="loading"){
<p>  LOADING</p>

 }
  
}

