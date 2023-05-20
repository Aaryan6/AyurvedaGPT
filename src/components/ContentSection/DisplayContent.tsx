import React from "react";

const DisplayContent = ({ answer }: any) => {
  return (
    <div className="mt-2 max-w-3xl mx-auto w-2/3">
      <h4>Result:</h4>
      <p
        placeholder="Result will be displayed here.."
        className="bg-gray-100 rounded-md p-4 py-4 mt-2 min-h-[10rem] resize-none w-full outline-none h-max"
      >
        {answer}
      </p>
    </div>
  );
};

export default DisplayContent;
