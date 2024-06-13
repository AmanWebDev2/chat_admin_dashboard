import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

export const sideBarLinks = [
  {
    label: "Dashboard",
    icon: <LuLayoutDashboard />,
    route: "/dashboard",
  },
  {
    label: "Conversations",
    icon: <AiOutlineMessage />,
    route: "/dashboard/conversation",
    subLinks: [
      {
        label: "Inbox",
        route: "/dashboard/message/inbox",
      },
      {
        label: "Sent",
        route: "/dashboard/message/sent",
      },
    ]
  },
  {
    label: "Settings",
    icon: <IoSettingsOutline />,
    route: "/dashboard/settings",
    subLinks: [
      {
        label: "Profile",
        route: "/dashboard/setting/profile",
      },
      {
        label: "Account",
        route: "/dashboard/setting/account",
      },
    ]
  },
];

const Sidebar = () => {
  return (
    <>
      <aside className="border w-60 flex flex-col">
        <h1 className="text-xl border py-4 px-7">Chat App</h1>
        <ul className="flex flex-col gap-2 p-3 flex-1">
          {sideBarLinks.map(({ route, icon, label }) => {
            return (
              <Link href={route} key={label}>
                <li className="p-3 flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
                  <span>{icon}</span>
                  {label}
                </li>
              </Link>
            );
          })}
          {/* profile section */}
          <div className="mt-auto">
          <li className="p-3 flex flex-1 items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Aman
          </li>
          </div>
        </ul>
      </aside>
    </>
  );
};

const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
