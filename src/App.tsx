import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("first render");
    (async () => {
      await fetch("http://localhost:5000/api")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <main className="bg-white h-screen">
      <Navbar />
      <MainSection />
    </main>
  );
}

export default App;
