import { auth, googleProvider ,GitHub_provider,facebook_provider} from '../firebase/Firebase';
import {
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'universal-cookie'
export const Auth = (props) => {
  const{setIsAuth}=props;
  const cookie = new Cookies();
  const router = useRouter();


  const signInWithGoogle = async () => {
    try {
      const result=await signInWithPopup(auth, googleProvider);
      console.log(result)
      cookie.set("auth-token",result.user.refreshToken)
      setIsAuth(true);
      const user = result.user;

    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGitHub = async () => {
    try {
    
      const result=await signInWithPopup(auth, GitHub_provider);
      console.log(result)
      cookie.set("auth-token",result.user.refreshToken)
      setIsAuth(true);
      const user = result.user;

    } catch (err) {
      console.error(err);
    }
  };
  const signInWithfacebook = async () => {
    try {
    
      const result=await signInWithPopup(auth, facebook_provider);
      console.log(result)
      cookie.set("auth-token",result.user.refreshToken)
      setIsAuth(true);
      const user = result.user;

    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Redirect to the home page if the user is logged in
        router.replace('/Login');
      }
    });

    // Clean up the subscription when the component unmounts
    return unsubscribe;
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-3xl font-bold mb-4 text-black block mx-auto text-center"> Please Sign In to Continue</h1>

<button  onClick={signInWithGoogle} className="border-2 border-google hover:bg-google text-google hover:text-white font-semibold py-4 px-4 rounded-lg w-64 mt-5 flex justify-evenly items-center transition-all duration-450">
<img src="/google.png" alt="google"height={"30px"} width={"30px"} style={{background:'white'}}className='bg-white rounded-full'/>
Sign In With Google
</button> 
<button  onClick={signInWithGitHub} className="border-2 border-github hover:bg-github text-github hover:text-white font-semibold py-4 px-4 rounded-lg w-64 mt-5 flex justify-evenly items-center transition-all duration-450">
<img src="/Github.png" alt="google" height={"30px"} width={"30px"} style={{background:'white'}}className='bg-white rounded-full' />
Sign In With Github
</button> 
<button  onClick={signInWithfacebook} className="border-2 border-facebook hover:bg-facebook text-facebook hover:text-white font-semibold py-4 px-4 rounded-lg w-64 mt-5 flex justify-evenly items-center transition-all duration-450 ">
<img src="/facebook.png" alt="google" height={"30px"} width={"30px"}  />
Sign In With facebook
</button> 
    </div>
  );
};
