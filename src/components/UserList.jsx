import { ScrollArea } from "@/components/ui/scroll-area";

const users = [
  { id: 1, name: "User 1", avatar: "https://placehold.co/40x40" },
  { id: 2, name: "User 2", avatar: "https://placehold.co/40x40" },
  // Add more users as needed
];

export const UserList = () => {
  return (
    <div className="w-60 bg-gray-800 text-white">
      <ScrollArea className="h-full">
        <nav className="flex flex-col p-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center mb-2">
              <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full" />
              <div className="ml-2">
                <div className="text-sm font-semibold">{user.name}</div>
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
};