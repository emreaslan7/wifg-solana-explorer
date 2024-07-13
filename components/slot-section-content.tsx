import NumberTicker from "./magicui/number-ticker";
import wifg1 from "@/public/slot-section-avatars/1.png";
import wifg2 from "@/public/slot-section-avatars/2.png";
import wifg3 from "@/public/slot-section-avatars/3.png";
import wifg4 from "@/public/slot-section-avatars/4.png";
import wifg5 from "@/public/slot-section-avatars/5.png";
import wifg6 from "@/public/slot-section-avatars/6.png";

import {
  getClusterNodes,
  getSlotLeader,
  getSlotLeaders,
  getSlot,
} from "@/actions/slots";
import { trimAddreses } from "@/actions";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const SlotSectionContent = async () => {
  const validators = await getClusterNodes();
  const response = await getSlotLeader();
  const leader = trimAddreses(response);

  const leaders = await getSlotLeaders();

  const getRandomAvatarUrl = () => {
    const avatars = [wifg1, wifg2, wifg3, wifg4, wifg5, wifg6];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  return (
    <div className="flex flex-col justify-start gap-16">
      <div>
        <p className="text-sm font-semibold">Validators</p>
        <p className="whitespace-pre-wrap text-7xl font-medium  mt-0.5">
          <NumberTicker
            value={validators ?? 0}
            className="dark:text-violet-500 text-[#a99b8c]"
          />
        </p>
      </div>

      <div>
        <p className="text-sm font-semibold mb-3">Current Leader</p>
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={getRandomAvatarUrl().src} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>{leader}</p>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">Next Leaders</p>

        <div className="flex items-center gap-2 mt-2">
          {leaders?.map((leader: string, index: number) => (
            <TooltipProvider key={index}>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="cursor-default">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={getRandomAvatarUrl().src} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{leader}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
};
