import { AiFillStar } from "react-icons/ai";

interface DisplayContentProps {
  answer: string;
  loading: boolean;
}

const DisplayContent = ({ answer, loading }: DisplayContentProps) => {
  return (
    <div className="w-full mt-6">
      <div className="bg-[#ecf1f5] dark:bg-[#1a394a] dark:text-teal-50 px-6 w-full rounded-md">
        {answer ? (
          <p className={`whitespace-break-spaces py-6 leading-relaxed`}>
            {answer.trimStart()}
          </p>
        ) : (
          <p className="dark:text-slate-300 py-4 leading-relaxed">
            <AiFillStar className={`text-2xl ${loading && "animate-spin"}`} />
          </p>
        )}
      </div>
    </div>
  );
};

export default DisplayContent;
