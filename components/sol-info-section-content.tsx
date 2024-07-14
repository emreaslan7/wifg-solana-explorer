import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTokenStatsSOL_ONEWEEK } from "@/actions/token";

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
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="price">Price</TabsTrigger>
          <TabsTrigger value="total-holders">Total Holders</TabsTrigger>
          <TabsTrigger value="active-users">Active Users</TabsTrigger>

          <TabsTrigger value="new-users">New Users</TabsTrigger>
          <TabsTrigger value="buyers">Buyers</TabsTrigger>
          <TabsTrigger value="sellers">Sellers</TabsTrigger>
        </TabsList>
        <TabsContent value="price">
          {latest_price} ve rate: {priceChange}
        </TabsContent>
        <TabsContent value="total-holders">{totalHolders}</TabsContent>

        <TabsContent value="active-users">{activeUsers}</TabsContent>
        <TabsContent value="new-users">{newUsers}</TabsContent>
        <TabsContent value="buyers">{buyers}</TabsContent>
        <TabsContent value="sellers">{sellers}</TabsContent>
      </Tabs>
    </div>
  );
};
