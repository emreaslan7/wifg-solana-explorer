import { getClusterNodes } from "@/actions/slots";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardWrapperProps {
  title: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const CardWrapper = ({ title, footer, children }: CardWrapperProps) => {
  //   getBlock(277181813);
  getClusterNodes();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};
