import { Toaster } from "react-hot-toast";
import AdminNavbar from "./components/AdminNavBar";
import { Outlet } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="min-h-screen relative">
      <Toaster />
      <AdminNavbar className="fixed" />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}
