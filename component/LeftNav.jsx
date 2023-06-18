import React from "react";
import { BiEdit } from "react-icons/bi";
import Avatar from "./Avatar";
import { useAuth } from "@/context/authContext";
import Icon from "./Icon";
import {FiPlus} from "react-icons/fi"


const LeftNav = () => {
const {currentUser} = useAuth()

  return (
    <div className="w-[80px] items-center flex flex-col justify-between py-0 shrink-0 transition-all">
      <div className="relative group cursor-pointer">
        <Avatar size="large" user={currentUser}/>
        <div className="w-full h-full rounded-full bg-black/[0.5] absolute top-0 left-0 justify-center items-center hidden group-hover:flex">
          <BiEdit size={14} />
        </div>
      </div>

      <div className="flex gap-5 flex-col items-center">
      <Icon 
      size="x-large"
      className="bg-green-500 hover:bg-gray-600"
      icon={<FiPlus size={24}/>}
      onClick={() => {}}
      />
      </div>
    </div>
  );
};

export default LeftNav;
