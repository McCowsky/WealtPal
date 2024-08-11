import { AreaChart, BarChart3, FileSearch, LineChart, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AreaVariant } from "./area-variant";
import { BarVariant } from "./bar-variant";
import { LineVariant } from "./line-variant";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Skeleton } from "./ui/skeleton";

type Props = {
  data?: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const Chart = ({ data = [] }: Props) => {
  const [chartType, setChartType] = useState("area");

  const onTypeChange = (type: string) => {
    setChartType(type);
  };

  return (
    <Card className='border-none drop-shadow-sm'>
      <CardHeader className='flex justify-between space-y-2 lg:flex-row lg:items-center lg:space-y-0'>
        <CardTitle className='line-clamp-1 text-xl'>Transactions</CardTitle>
        <Select defaultValue={chartType} onValueChange={onTypeChange}>
          <SelectTrigger className='h-9 rounded-md px-3 lg:w-auto'>
            <SelectValue placeholder='Chart type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='area'>
              <div className='flex items-center'>
                <AreaChart className='mr-2 size-4 shrink-0' />
                <p className='line-clamp-1'>Area chart</p>
              </div>
            </SelectItem>
            <SelectItem value='line'>
              <div className='flex items-center'>
                <LineChart className='mr-2 size-4 shrink-0' />
                <p className='line-clamp-1'>Line chart</p>
              </div>
            </SelectItem>
            <SelectItem value='bar'>
              <div className='flex items-center'>
                <BarChart3 className='mr-2 size-4 shrink-0' />
                <p className='line-clamp-1'>Bar chart</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className='flex h-[350px] w-full flex-col items-center justify-center gap-y-4'>
            <FileSearch className='size-6 text-muted-foreground' />
            <p className='text-sm text-muted-foreground'>No data for this period</p>
          </div>
        ) : (
          <>
            {chartType === "line" && <LineVariant data={data} />}
            {chartType === "area" && <AreaVariant data={data} />}
            {chartType === "bar" && <BarVariant data={data} />}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export const ChartLoading = () => {
  return (
    <Card className='border-none drop-shadow-sm'>
      <CardHeader className='flex justify-between space-y-2 lg:flex-row lg:items-center lg:space-y-0'>
        <Skeleton className='h-8 w-48' />
        <Skeleton className='h-8 w-full lg:w-[120px]' />
      </CardHeader>
      <CardContent>
        <div className='flex h-[350px] w-full items-center justify-center'>
          <Loader2 className='h-6 w-6 animate-spin text-slate-300' />
        </div>
      </CardContent>
    </Card>
  );
};
