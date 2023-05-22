import SearchBox from "./ContentSection/SearchBox";
import DisplayContent from "./ContentSection/DisplayContent";
import { useState } from "react";

const MainSection = () => {
  const [answer, setAnswer] = useState("");
  return (
    <section className="pt-[4rem] max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-left max-w-2xl leading-snug">
        Unlocking Ayurvedic Wisdom through AI-Powered Insights
      </h1>
      <p className="text-lg text-gray-700 text-left mt-2">
        Your AI-powered guide to Ayurvedic wellness
      </p>

      <div className="flex place-items-start mt-16 gap-8">
        <SearchBox setAnswer={setAnswer} />
        <DisplayContent answer={answer} />
      </div>
    </section>
  );
};

export default MainSection;
