import SearchBox from "./ContentSection/SearchBox";
import DisplayContent from "./ContentSection/DisplayContent";
import { useState } from "react";

const MainSection = () => {
  const [answer, setAnswer] = useState("");
  return (
    <section className="flex flex-col items-center pt-[5rem] max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-left mb-4">
        Discover Ayurveda's Wisdom
      </h1>
      <p className="text-xl text-gray-700 text-left">
        Your AI-powered guide to Ayurvedic wellness
      </p>

      <SearchBox setAnswer={setAnswer} />
      <DisplayContent answer={answer} />
    </section>
  );
};

export default MainSection;
