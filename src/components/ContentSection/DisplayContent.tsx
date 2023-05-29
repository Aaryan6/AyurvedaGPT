import { AiFillStar } from "react-icons/ai";

interface DisplayContentProps {
  answer: string;
  loading: boolean;
}

const DisplayContent = ({ answer, loading }: DisplayContentProps) => {
  return (
    <div className="w-full mt-6">
      {answer ? (
        <p
          className={`bg-white dark:bg-[#10121c] dark:text-slate-300 whitespace-break-spaces rounded-md px-6 py-6 w-full leading-relaxed`}
        >
          {answer.trimStart()}
        </p>
      ) : (
        <p className="bg-white dark:bg-[#10121c] dark:text-slate-300 rounded-md px-6 py-4 w-full leading-relaxed">
          <AiFillStar className={`text-2xl ${loading && "animate-spin"}`} />
        </p>
      )}
    </div>
  );
};

export default DisplayContent;
