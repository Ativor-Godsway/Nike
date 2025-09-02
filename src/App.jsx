import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-x-hidden ">
      <Toaster />
      <Navbar />
      <main className="pt-20 ">
        <Outlet className="flex-grow w-screen" />
      </main>
      <Footer />
    </div>
  );
}
