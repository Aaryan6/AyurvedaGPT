const Sidebar = () => {
  return (
    <div className="max-w-[24rem] hidden lg:block">
      <div className="mx-auto mt-10 px-4">
        <div className="bg-[#fff] dark:bg-[#171d29] dark:text-slate-300 px-6 py-6 rounded-xl text-center  my-5">
          <h3 className="text-lg font-medium">What is Ayurveda?</h3>
          <p className="mt-2 text-sm leading-normal">
            Ayurveda is an ancient system of medicine & philosophy originating
            in India. It is based on the belief that health is a balance of
            three doshas, or energies: Vata, Pitta, and Kapha.
          </p>
        </div>
        <div className="bg-[#fff] dark:bg-[#171d29] dark:text-slate-300 px-6 py-6 rounded-xl text-center my-5">
          <h3 className="text-lg font-medium">What it does?</h3>
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
