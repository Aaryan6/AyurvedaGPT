const Sidebar = () => {
  return (
    <div className="max-w-[24rem] hidden lg:block">
      <div className="mx-auto mt-10 px-4">
        <div className="bg-[#ECF1F5] dark:bg-[#171925] dark:text-slate-300 px-6 py-6 rounded-xl text-center my-5">
          <h3 className="text-lg font-medium">About it</h3>
          <p className="mt-2 text-sm">
            Ayurveda GPT is a chat model that answers your questions based on
            ayurveda knowledge.
          </p>
        </div>
        <div className="bg-[#ECF1F5] dark:bg-[#171925] dark:text-slate-300 px-6 py-6 rounded-xl text-center  my-5">
          <h3 className="text-lg font-medium">How it works?</h3>
          <p className="mt-2 text-sm">
            Ayurveda GPT is a chat model that answers your questions based on
            ayurveda knowledge.
          </p>
        </div>
        <div className="bg-[#ECF1F5] dark:bg-[#171925] dark:text-slate-300 px-6 py-6 rounded-xl text-center  my-5">
          <h3 className="text-lg font-medium">Limitations</h3>
          <p className="mt-2 text-sm">
            Ayurveda GPT is a chat model that answers your questions based on
            ayurveda knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
