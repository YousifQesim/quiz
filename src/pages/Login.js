
import { useState } from 'react';
import { Auth } from '../components/Auth';
import Cookies from 'universal-cookie'
import { LogoutButton } from '@/components/LogoutButton';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
    
  const cookie = new Cookies();
  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"));
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/QuizPage'); // Replace '/destination-page' with the actual URL of the page you want to navigate to
    }, 3000); // Delay in milliseconds (3 seconds)

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, []);
      
  return (


    <>
  
  you are logged in sucsessfully
  {/* <Blogs/> */}

  <LogoutButton/>
  </>


  )
}
