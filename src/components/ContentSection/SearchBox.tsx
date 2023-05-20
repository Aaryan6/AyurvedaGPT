import { useState } from "react";
import axios from "axios";

const SearchBox = ({ setAnswer }: any) => {
  const [searchTerm, setSearchTerm] = useState(
    "How to get peace and present at the moment?"
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await axios.post("http://localhost:5000/api", {
      question: searchTerm,
    });
    console.log(res.data.response);
    setAnswer(res.data.response);
    setLoading(false);
  };

  return (
    <div className="mt-20 max-w-3xl mx-auto w-2/3">
      <div className="bg-gray-100 rounded-md p-4 py-3 w-full">
        <input
          type="text"
          placeholder="Ask your question here..."
          className="w-full bg-transparent outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full text-center bg-slate-800 text-white py-2 mt-3 rounded-md"
      >
        {loading ? "Loading..." : "Get Result"}
      </button>
    </div>
  );
};

export default SearchBox;
