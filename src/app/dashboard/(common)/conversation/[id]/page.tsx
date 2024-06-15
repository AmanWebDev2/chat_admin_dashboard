"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ChatBubble from "@/components/conversation/ChatBubble";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";
import { RiFileGifLine } from "react-icons/ri";
import { Toggle } from "@/components/ui/toggle";
import EmojiPicker from "emoji-picker-react";
import GifPicker, { TenorImage } from "gif-picker-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Conversation = ({ params }: { params: { id: string } }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="conversation-header py-4 px-7 border">
        <h4 className="text-lg">Conversation {params.id}</h4>
      </div>
      <div className="conversation-body container overflow-auto flex-1">
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
      </div>
      <div className="conversation-footer flex items-center gap-4 container mb-5">
        <div className="extra flex gap-4">
          <Popover>
            <PopoverTrigger>
              <Toggle variant="outline">
                <CiFaceSmile />
              </Toggle>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <EmojiPicker />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Toggle variant="outline">
                <RiFileGifLine />
              </Toggle>
            </PopoverTrigger>
            <PopoverContent className="max-h-96 w-full overflow-auto">
              <GifPicker
                // onGifClick={handleGif}
                height="-webkit-fill-available"
                width="unset"
                // theme={Theme.DARK}
                tenorApiKey={"AIzaSyBAQM7rDpRahglJ3iDdMoUcCxCvNB8sWuA"}
              />{" "}
            </PopoverContent>
          </Popover>

          <Toggle variant="outline">
            <IoDocumentAttachOutline />
          </Toggle>
        </div>
        <Textarea
          className="outline-none focus-visible:ring-0 shadow-lg flex-1"
          placeholder="Type a message..."
        ></Textarea>
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default Conversation;
