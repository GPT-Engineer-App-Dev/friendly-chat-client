import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const messages = [
  { id: 1, user: "User 1", content: "Hello!", timestamp: "10:00 AM" },
  { id: 2, user: "User 2", content: "Hi there!", timestamp: "10:01 AM" },
  // Add more messages as needed
];

const Index = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Logic to send message
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <h1 className="text-xl font-semibold">#general</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">Search</Button>
          <Button variant="outline">Notifications</Button>
        </div>
      </header>
      <ScrollArea className="flex-grow p-4 bg-gray-800 text-white">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-4">
            <div className="flex items-center">
              <img src="https://placehold.co/40x40" alt={msg.user} className="h-10 w-10 rounded-full" />
              <div className="ml-2">
                <div className="text-sm font-semibold">{msg.user}</div>
                <div className="text-xs text-gray-400">{msg.timestamp}</div>
              </div>
            </div>
            <div className="ml-12">{msg.content}</div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex items-center p-4 bg-gray-900">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-grow mr-2"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default Index;