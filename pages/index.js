import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Loader from "@/component/Loader";

const Home = () => {
  const router = useRouter();

  const { signOut, currentUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !currentUser) {
      router.push("/login");
    }
  }, [currentUser, isLoading]);

  return !currentUser ? (
    <Loader />
  ) : (
    // <div>
    //   <button onClick={signOut} className="text-black">
    //     Sign out
    //   </button>
    // </div>
    
    <div className="bg-c1 flex h-[100vh]">
<div className="flex w-full shrink-0">
<div>Left Nav</div>

<div className="flex bg-c2 grow">
  <div>Sidebar</div>
  <div>chat</div>
</div>

</div>
    </div>

  );
};

export default Home;
