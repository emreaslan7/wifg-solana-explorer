"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div className="flex  max-w-sm items-center space-x-2 w-[400px]">
      <Input
        type="text"
        placeholder="search anything... (block, transaction hash etc.)"
        className="py-4"
      />
      <Button type="submit">Search</Button>
    </div>
  );
}
