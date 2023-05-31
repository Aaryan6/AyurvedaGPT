const Sidebar = () => {
  return (
    <div className="max-w-[24rem] hidden lg:block">
      <div className="mx-auto mt-10 px-4">
        <div className="bg-[#fff] dark:bg-[#171d29] dark:text-slate-300 px-6 py-6 rounded-xl text-center my-5">
          <h3 className="text-lg font-medium">Capabilities</h3>
          <p className="mt-2 text-[0.9rem] leading-snug">
            Understanding user queries and analyzing their specific health
            concerns, and generates personalized recommendations aligned with
            Ayurvedic principles.
          </p>
        </div>
        <div className="bg-[#fff] dark:bg-[#171d29] dark:text-slate-300 px-6 py-6 rounded-xl text-center  my-5">
          <h3 className="text-lg font-medium">Limitations</h3>
          <p className="mt-2 text-[0.9rem] leading-snug">
            Providing outcomes based on the available restricted understanding
            and insights of Ayurveda.
          </p>
        </div>
        <div className="bg-[#fff] dark:bg-[#171d29] dark:text-slate-300 px-6 py-6 rounded-xl text-center my-5">
          <h3 className="text-lg font-medium">Try this!</h3>
          <p className="mt-2 text-[0.9rem] leading-normal">
            Q. What is the best diet for me?
            <br />
            Q. What is the best exercise for me?
            <br />
            Q. What is the best lifestyle for me?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
