import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const servers = [
  { id: 1, name: "Server 1", icon: "https://placehold.co/40x40" },
  { id: 2, name: "Server 2", icon: "https://placehold.co/40x40" },
  // Add more servers as needed
];

const channels = [
  { id: 1, name: "general" },
  { id: 2, name: "random" },
  // Add more channels as needed
];

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 bg-gray-800 text-white">
      <nav className="flex flex-col items-center py-4">
        {servers.map((server) => (
          <NavLink
            key={server.id}
            to={`/server/${server.id}`}
            className={({ isActive }) =>
              cn(
                "mb-2 p-2 rounded-full",
                isActive ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
              )
            }
          >
            <img src={server.icon} alt={server.name} className="h-10 w-10" />
          </NavLink>
        ))}
      </nav>
      <ScrollArea className="flex-grow">
        <nav className="flex flex-col px-4">
          {channels.map((channel) => (
            <NavLink
              key={channel.id}
              to={`/channel/${channel.id}`}
              className={({ isActive }) =>
                cn(
                  "mb-2 p-2 rounded",
                  isActive ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
                )
              }
            >
              {channel.name}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>
      <div className="flex items-center p-4 bg-gray-900">
        <Avatar>
          <AvatarImage src="https://placehold.co/40x40" alt="User Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-2">
          <div className="text-sm font-semibold">Username</div>
          <div className="text-xs text-gray-400">Online</div>
        </div>
      </div>
    </div>
  );
};