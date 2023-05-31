import SearchBox from "./ContentSection/SearchBox";
import DisplayContent from "./ContentSection/DisplayContent";
import { useState } from "react";

const ChatSection = () => {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <section className="flex-1 sm:pt-4 sm:pb-8 sm:px-10 h-full">
      <div className="bg-[#fff] dark:bg-[#171d29] relative sm:mx-auto w-full h-full sm:rounded-xl p-4 sm:px-12 pt-8">
        <h3 className="text-center uppercase font-semibold text-2xl dark:text-slate-200">
          Ayurveda GPT
        </h3>
        <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
          Unlocking Ayurvedic Wisdom through AI-Powered Insights.
        </p>
        <SearchBox
          setAnswer={setAnswer}
          loading={loading}
          setLoading={setLoading}
        />
        <DisplayContent answer={answer} loading={loading} />
      </div>
    </section>
  );
};

export default ChatSection;
