import React from "react";
import {} from "react-icons/io"

const Login = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-c1">
      <div className="flex items-center flex-col">
        <div className="text-center">
          <div className="text-4xl font-bold">Login to your Account</div>
          <div className="mt-3 text-c3">
            Connect & chat with anyone, anywhere!
          </div>
        </div>

        <div className="flex items-center gap-2 w-full mt-10 mb-5">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px]">
            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md">
              <span>Login with Google</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px]">
            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md">
              <span>Login with Facebook</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Login;
