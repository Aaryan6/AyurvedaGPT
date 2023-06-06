import axios from "axios";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const SearchBox = ({ setAnswer, loading, setLoading }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [removeIcon, setRemoveIcon] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!searchTerm) return;

    setLoading(true);
    setAnswer("");
    setRemoveIcon(false);

    // post request to backend
    try {
      const res = await axios.post(
        "https://coral-app-gs2vm.ondigitalocean.app/ask",
        { question: searchTerm },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SECRET_KEY}`,
          },
        }
      );
      setAnswer(res.data.response);
    } catch (err) {
      setAnswer("⚠️ Server overloaded. Please try again later.");
    }
    setLoading(false);
    setRemoveIcon(true);
  };

  const ClearInput = () => {
    setSearchTerm("");
    setRemoveIcon(false);
    setAnswer("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#ecf1f5] dark:bg-[#1a394a] flex rounded-md pl-6 pr-2 py-2 mt-8"
    >
      <input
        placeholder="Ask here..."
        className="w-full bg-transparent outline-none resize-none pr-2 dark:text-teal-50"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />
      {!removeIcon ? (
        <button
          type="submit"
          className="grid place-items-center bg-[#061a25] text-white w-10 h-10 rounded-md"
        >
          <AiOutlineEdit
            className={loading ? "animate-pulse text-lg" : "text-lg"}
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={ClearInput}
          className="grid place-items-center bg-[#061a25] text-white w-10 h-10 rounded-md"
        >
          <RxCross2 className="text-lg" />
        </button>
      )}
    </form>
  );
};

export default SearchBox;
