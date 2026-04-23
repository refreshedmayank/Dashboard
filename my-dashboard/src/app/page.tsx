import ChartBox from "@/components/Expense_Chart";
import Link from "next/link";
import { LayoutDashboard, ArrowUpDown, PieChart, Wallet, Target, Settings } from "lucide-react";

function Home() {
  return (
    <div className="flex min-h-screen bg-black">

      {/* Sidebar */}
      <div className="flex flex-col gap-6 items-center py-8 px-4 border-r border-gray-800 h-full">
        <LayoutDashboard className="text-white w-5 h-5" />
        <ArrowUpDown className="text-white w-5 h-5" />
        <PieChart className="text-white w-5 h-5" />
        <Wallet className="text-white w-5 h-5" />
        <Target className="text-white w-5 h-5" />
        <Settings className="text-gray-500 w-5 h-5 mt-auto" />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <span className="text-white font-semibold">Expenser</span>
          <div className="flex gap-6 items-center">
            <Link className="text-gray-400 text-sm" href="">home</Link>
            <Link className="text-gray-400 text-sm" href="">support</Link>
            <Link className="text-gray-400 text-sm" href="">my account</Link>
            <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 px-3 py-1 rounded-lg">
              <input
                className="bg-transparent text-white text-sm placeholder-gray-500 outline-none"
                type="text"
                placeholder="search"
              />
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4 p-6">
          <div className="flex flex-col gap-2 justify-center items-center h-32 rounded-xl border border-gray-700">
            <span className="text-gray-400 text-sm">Monthly Income</span>
            <span className="text-white text-xl font-semibold">$40,000</span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center h-32 rounded-xl border border-gray-700">
            <span className="text-gray-400 text-sm">Monthly Expenses</span>
            <span className="text-white text-xl font-semibold">67%</span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center h-32 rounded-xl border border-gray-700">
            <span className="text-gray-400 text-sm">Savings</span>
            <span className="text-white text-xl font-semibold">$13,200</span>
          </div>
        </div>

        {/* Chart */}
        <div className="mx-6 mb-6 p-4 rounded-xl border border-gray-700">
          <span className="text-gray-400 text-sm block mb-3">Daily Expenses</span>
          <ChartBox />
        </div>

      </div>
    </div>
  );
}

export default Home;