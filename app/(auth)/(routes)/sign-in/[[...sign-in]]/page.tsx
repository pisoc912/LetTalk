"use client"
import { SignIn, SignInButton, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import "./styles.css";
import Image from "next/image";

const Page = () => {
  const {signIn,setActive} = useSignIn()
  const router = useRouter()

  const handleDemoSignIn =async () => {
    try {
      const username = "demo@test.com"
      const password = "password"
      await signIn?.create({
        identifier:username,
        password:password
      }).then((result)=>{
        if(result.status === "complete"){
          console.log(result);
          setActive({session:result.createdSessionId})
          router.push('/')
        }
      })
    } catch (error) {
      console.log("Failed to sign in:",error);
    }
  }
  return (
    <div className="homeLayout">
      <div className="authLayoutContent">
        <Image src="/NewLogo.png" alt="logo" width={100} height={100}/>
        <h1>Imaging a placing...</h1>
        <p>
          ...where you can belong to any school club, any gaming group, or a
          worldwide art community.
        </p>
        <p>Where just you and anyone can spend time together.</p>
        <p>
          A place where strangers can become acquaintances...or maybe even
          friends.
        </p>
        <button onClick={handleDemoSignIn} className="demoButton">
          Demo User Login
        </button>
        <h6>
          Direct login without register a new account.
        </h6>
      </div>
      <div>
        <SignIn />
      </div>
    </div>
  );
};

export default Page;
