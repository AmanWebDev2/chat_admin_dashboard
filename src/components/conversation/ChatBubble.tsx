import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ChatBubble = () => {
  return (
    <div className="my-5">
      <div className="flex items-center gap-4 flex-row-reverse cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="bg-gray-100 p-3 rounded-lg">Hello</div>
      </div>
    </div>
  );
};

export default ChatBubble;
