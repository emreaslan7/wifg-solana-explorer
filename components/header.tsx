"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

import logo from "@/public/wifg_logo.png";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="mx-auto px-4 md:px-6 lg:px-8">
      <header className="grid grid-cols-3 h-20 w-full items-center px-4 md:px-6">
        <div className="flex items-center">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="flex justify-center gap-2">
          <Button variant={"link"} className="text-lg">
            <Link href={"/"}>Overview</Link>
          </Button>
          <Button variant={"link"} className="text-lg">
            <Link href={"/transactions"}>Transactions</Link>
          </Button>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <WalletMultiButton
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              transition: "color 0.2s",
              opacity: "0.9",
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          />
          <ModeToggle />
        </div>
      </header>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center">
      <Image src={logo} alt="Wifg Logo" width={80} height={36} />
    </div>
  );
}
