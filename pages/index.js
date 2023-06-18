import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  const { signOut, currentUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !currentUser) {
      router.push("/login");
    }
  }, [currentUser, isLoading]);

  return (
    // <div>
    //   <button onClick={signOut} className="text-black">
    //     Sign out
    //   </button>
    // </div>
    
    <div>
      
    </div>

  );
};

export default Home;
