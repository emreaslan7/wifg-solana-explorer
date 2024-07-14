import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTokenStatsSOL_ONEWEEK } from "@/actions/token";

const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const SolInfoSectionContent = async () => {
  const info = await getTokenStatsSOL_ONEWEEK();
  const {
    latest_price,
    totalHolders,
    priceChange,
    activeUsers,
    newUsers,
    buyers,
    sellers,
  } = info.data[0];
  return (
    <div>
      <Tabs defaultValue="price" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="price" defaultChecked>
            Price
          </TabsTrigger>
          <TabsTrigger value="total-holders">Total Holders</TabsTrigger>
          <TabsTrigger value="active-users">Active Users</TabsTrigger>

          <TabsTrigger value="new-users">New Users</TabsTrigger>
          <TabsTrigger value="buyers">Buyers</TabsTrigger>
          <TabsTrigger value="sellers">Sellers</TabsTrigger>
        </TabsList>
        <div className="pt-4">
          <TabsContent value="price">
            <div>
              <p className="text-7xl text-[#a99b8c] dark:text-violet-500 font-semibold">
                {latest_price.toFixed(2)} $
              </p>
              <p
                className={`text-3xl font-semibold ${
                  priceChange > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {priceChange > 0 ? "+" : "-"}
                {priceChange.toFixed(2)} %
              </p>
            </div>
          </TabsContent>
          <TabsContent value="total-holders">
            <div>
              <p className="text-7xl text-[#a99b8c] dark:text-violet-500 font-semibold">
                {formatNumber(totalHolders)}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="active-users">
            <div>
              <p className="text-7xl text-[#a99b8c] dark:text-violet-500 font-semibold">
                {formatNumber(activeUsers)}
              </p>
            </div>
          </TabsContent>
          <TabsContent value="new-users">
            <div>
              <p className="text-7xl text-[#a99b8c] dark:text-violet-500 font-semibold">
                {formatNumber(newUsers)}
              </p>
            </div>
          </TabsContent>
          <TabsContent value="buyers">
            <div>
              <p className="text-7xl text-[#a99b8c] dark:text-violet-500 font-semibold">
                {formatNumber(buyers)}
              </p>
            </div>
          </TabsContent>
          <TabsContent value="sellers">
            <div>
              <p className="text-7xl text-[#a99b8c] dark:text-violet-500 font-semibold">
                {formatNumber(sellers)}
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
