// "use client";

// import { getLatestPriceWIF } from "@/actions/token";

// export const WifSectionPriceText = async () => {
//   const data = await getLatestPriceWIF();
//   console.log(data);
//   return <div>{data.price}</div>;
// };

"use client";

import { useEffect, useState } from "react";
import { getLatestPriceWIF } from "@/actions/token";

export const WifSectionPriceText = () => {
  const [data, setData] = useState<{ price: string | number } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getLatestPriceWIF();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p className="text-3xl text-[#a99b8c] dark:text-violet-500 font-semibold">
        {data.price}$
      </p>
    </div>
  );
};
