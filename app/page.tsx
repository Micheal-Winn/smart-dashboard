import Card from "@/components/Cards/Card";
import dynamic from "next/dynamic";
import Navbar from "@/components/HeaderNav/Navbar";
import Image from "next/image";
const TransactionChartDynamic = dynamic(
  () => import("@/components/ChartsComponents/transaction.chart"),
  { ssr: false }
);
const TransactionPieChartDynamic = dynamic(
  () => import("@/components/ChartsComponents/transaction.pie.chart"),
  { ssr: false }
);
import ProgressBar from "@/components/ChartsComponents/progress.bar";

//Table components
import { CustomerDataTable } from "@/components/TableComponents/CustomerTable/data.table";
import { CustomerTableData } from "@/components/utils/DummyData/data";
import {columns} from "@/components/TableComponents/CustomerTable/column"

export default function Home() {
  return (
    <main className="!overflow-y-scroll h-screen px-3">
      <Navbar />
      <Card />
      <div className="flex flex-col xl:flex-row gap-6 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-[2%] pb-12 mb-4 pr-6 sm:pr-7 md:pr-6 lg:pr-7 xl:pr-0 2xl:pr-1 box-border pl-2 !overflow-hidden">
        <TransactionChartDynamic />
        <div className="flex flex-col w-full xl:w-[45%] gap-4">
          <div className="flex flex-col gap-4 py-3 px-3 rounded-lg xl:mt-6 2xl:mt-16 bg-white shadow-lg">
            <div className="flex items-center justify-between gap-[5%] text-sm font-semibold">
              <p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">
                Customers
              </p>
              <div className="w-[70%]">
                <ProgressBar progress={10} color="bg-blue-700" />
              </div>
            </div>
            <div className="flex items-center gap-[5%] text-sm font-semibold">
              <p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">
                Total Accounts
              </p>
              <div className="w-[70%]">
                <ProgressBar progress={20} color="bg-[#FE9520]" />
              </div>
            </div>
            <div className="flex items-center gap-[5%] text-sm font-semibold">
              <p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">
                Deposit Accounts
              </p>
              <div className="w-[70%]">
                <ProgressBar progress={40} color="bg-[#BE1FE5]" />
              </div>
            </div>
            <div className="flex items-center gap-[5%] text-sm font-semibold">
              <p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">
                Transaction Accounts
              </p>
              <div className="w-[70%]">
                <ProgressBar progress={80} color="bg-[#20C394]" />
              </div>
            </div>
          </div>
          <TransactionPieChartDynamic />
          {/* <div className="w-full bg-white rounded-lg shadow-lg py-2 sm:hidden">
            <TransactionDoughnutChart />
          </div> */}
        </div>
      </div>
      {/* <CustomerDataTable data={CustomerTableData} columns={columns}/> */}
    </main>
  );
}
