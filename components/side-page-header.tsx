import { Search } from "./search";
export const SidePageHeader = () => {
  return (
    <div className="w-full flex items-center justify-between mt-10">
      <div>
        <p className="text-3xl text-[#a99b8c] dark:text-violet-500 font-semibold">
          Transactions
        </p>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};
