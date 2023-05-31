import ChatSection from "./components/ChatSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="bg-[#ecf1f5] dark:bg-[#323b4d] h-screen overflow-scroll flex flex-col">
      <Navbar />
      <div className="flex flex-1 w-full max-w-[90rem] sm:mx-auto">
        <Sidebar />
        <ChatSection />
      </div>
    </main>
  );
}

export default App;
