const DisplayContent = ({ answer }: any) => {
  return (
    <div className="w-1/2">
      <p className="bg-[#edf0f4] rounded-md p-4 py-4 min-h-[15rem] resize-none w-full outline-none h-max">
        {answer ? answer : <span className="text-gray-400">Result</span>}
      </p>
    </div>
  );
};

export default DisplayContent;
