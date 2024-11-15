import { ChartConfig } from "@/components/ui/chart"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// export const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
// ]


export const newChartData = [
  { 
    month: "October", 
    totalIncome: 160000, 
    totalGirlfriend: 6800, 
    // totalExpenses: 49575, 
    // totalBlackTax: 15850, 
    // totalSavings: 10000, 
    // totalLoans: 70500, 
    // balance: 7275 
  },
  { 
    month: "November", 
    totalIncome: 110000, 
    totalGirlfriend: 2800, 
    // totalExpenses: 41500, 
    // totalBlackTax: 22700, 
    // totalSavings: 21000, 
    // totalLoans: 9000, 
    // balance: 0 
  }
];


export const chartConfig = {
  totalIncome: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  totalGirlfriend: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig