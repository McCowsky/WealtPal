"use client";
import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";
import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  const { onOpen } = useNewAccount();

  return (
    <div className='mx-auto -mt-24 w-full max-w-screen-2xl pb-10'>
      <DataGrid />
      <DataCharts />
    </div>
  );
}
