"use client"
import { SignIn, SignInButton, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

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
    <div>
      <SignIn />
      <button
        onClick={handleDemoSignIn}
        style={{
          // backgroundColor: "blue",
          // color: "white",
          // padding: "10px 20px",
          // border: "none",
          // borderRadius: "5px",
          // cursor: "pointer",
          position: "relative", /* 或 absolute, fixed, sticky */
  zIndex: 1000,
        }}
      >
        Sign in with Clerk
      </button>
    </div>
  );
};

export default Page;
