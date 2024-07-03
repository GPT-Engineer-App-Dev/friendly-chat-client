import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { UserList } from "@/components/UserList";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <UserList />
    </div>
  );
};

export default Layout;