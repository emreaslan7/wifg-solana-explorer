import Globe from "./magicui/globe";
import { Card } from "./ui/card";
import { Text } from "@/components/text";

export const SlotSection = () => {
  return (
    <Card className="relative flex  w-full   overflow-hidden  px-20 pb-40 pt-8 md:pb-60 h-[300px]">
      <div className="flex flex-col justify-start gap-10">
        <Text title="Validators" size="3xl" bold />
        <Text title="Current Leader" size="xl" bold />
        <Text title="Previous Leaders" size="xl" bold />
      </div>

      {/* <CardTitle className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80  bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </CardTitle> */}
      <Globe className="top-0 mr-5 w-[500px]" />
    </Card>
  );
};
