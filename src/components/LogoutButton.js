import { auth } from "../firebase/Firebase";
import {

  signOut
} from "firebase/auth";
import { useState } from "react";
import Cookies from 'universal-cookie'
import {Router, useRouter } from "next/router";

export const LogoutButton = (props) => {
  const router = useRouter();
  const cookie = new Cookies();
  
  const{setIsAuth}=props;
  
  function logout() {
    auth.signOut()
      .then(() => {
  
  router.replace('/');


      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  }

  return (
    <div >
      <button onClick={logout} className='hover:text-teal-500 hover:transition-all hover:ease-in-out'> Logout </button>
    </div>
  );
};