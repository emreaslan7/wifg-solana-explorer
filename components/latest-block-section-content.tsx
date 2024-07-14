import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

import { getLastBlockDetails, getTransaction } from "@/actions/block";
import { Button } from "./ui/button";
import { revalidatePath } from "next/cache";
// bir fonksiyon yaz. bu fonksiyon buradaki const transaction = blockDetails?.result.transactions[1];
// transactionlardan 0'dan 5'e kadar olanları alalım.
// bu fonksiyonların signatures'larını bu şekilde alalım.
// const signatures = transaction.transaction.signatures[0];
// daha sonra bu signaturesları tek tek getTransaction fonksiyonuna gönderelim.
// oradan dönen transaction detaylatrını arrray içinde return edelim.

// bu arrayi burada map ile dönerek tabloya yazdıralım.
const getTimeDiff = (blockTime: number) => {
  const date = new Date(blockTime * 1000);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  return `${minutes} minutes ago`;
};

const getTransactionsDetails = async (transactions: any) => {
  const transactionsDetails = [];
  const startIndex = transactions?.length - 1;
  const endIndex = Math.max(transactions?.length - 4, 0);
  for (let i = startIndex; i >= endIndex; i--) {
    const signatures = transactions[i].transaction.signatures[0];
    const transactionDetails = await getTransaction(signatures);
    const fee = transactionDetails.result?.meta?.fee / 1000000000;
    const slot = transactionDetails.result?.slot;
    const blockTime = transactionDetails.result?.blockTime;
    const blockTimeDiff = getTimeDiff(blockTime);

    let instruction = "";
    if (
      transactionDetails.result?.transaction.message.instructions[0]?.parsed
        ?.type
    ) {
      instruction =
        transactionDetails.result?.transaction.message.instructions[0]?.parsed
          .type;
    } else instruction = "unknown";
    const by =
      transactionDetails.result?.transaction?.message.accountKeys[0].pubkey;

    //trim signature and by addres baştan 15 ve sondan 15 karakter alınacak

    const byTrim = by?.slice(0, 5) + "..." + by?.slice(-5);
    const signatureTrim =
      signatures?.slice(0, 5) + "..." + signatures?.slice(-5);

    transactionsDetails.push({
      signature: signatureTrim,
      block: slot,
      time: blockTimeDiff,
      instruction: instruction,
      by: byTrim,
      fee: fee,
    });
  }
  return transactionsDetails;
};

export const LatestBlockSectionContent = async () => {
  revalidatePath("/");
  const blockDetails = await getLastBlockDetails();

  const allTxDetails = await getTransactionsDetails(
    blockDetails?.result?.transactions
  );

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <p className="font-semibold">Last Transactions in Last Block</p>
        <Button variant={"link"}>
          <Link href={"/transactions"}>See All</Link>
        </Button>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Signature</TableHead>
            <TableHead>Block</TableHead>
            <TableHead>Time</TableHead>
            <TableHead className="text-center">Instruction</TableHead>
            <TableHead className="text-center">By</TableHead>
            <TableHead className="text-center">Fee (Sol)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/*  create map function there */}

          {allTxDetails.map((tx, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{tx.signature}</TableCell>
                <TableCell>{tx.block}</TableCell>
                <TableCell>{tx.time}</TableCell>
                <TableCell className="text-right">{tx.instruction}</TableCell>
                <TableCell className="text-right">{tx.by}</TableCell>
                <TableCell className="text-right">{tx.fee} SOL</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
