import { useState } from "react";
import axios from "axios";

const SearchBox = ({ setAnswer }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
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
    <div className="w-1/2">
      <div className="bg-[#edf0f4] rounded-md p-4 py-3 w-full">
        <textarea
          placeholder="Write here..."
          className="w-full bg-transparent outline-none h-[10rem] resize-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full text-center bg-slate-800 text-white py-2 mt-2 rounded-md"
      >
        {loading ? "Loading..." : "Get Result"}
      </button>
    </div>
  );
};

export default SearchBox;
