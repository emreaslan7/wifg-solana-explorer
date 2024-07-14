import { SidePageHeader } from "@/components/side-page-header";
import React, { Suspense } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { getLastBlockDetails, getTransaction } from "@/actions/block";
import { revalidatePath } from "next/cache";

const TransactionsPage = () => {
  revalidatePath("/transactions");

  return (
    <div className="w-full">
      <SidePageHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestBlockSectionContent />
      </Suspense>
    </div>
  );
};

export default TransactionsPage;

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
  const endIndex = Math.max(transactions?.length - 15, 0);
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

const LatestBlockSectionContent = async () => {
  const blockDetails = await getLastBlockDetails();

  const allTxDetails = await getTransactionsDetails(
    blockDetails?.result?.transactions
  );

  return (
    <div className="w-full">
      {allTxDetails ? (
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
                  <TableCell className="text-right">
                    <Badge>{tx.instruction}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{tx.by}</TableCell>
                  <TableCell className="text-right">{tx.fee} SOL</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
