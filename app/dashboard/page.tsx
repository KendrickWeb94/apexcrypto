"use client";


import { Bank, ChartBar,  PaperPlaneTilt, TrendDown, TrendUp } from "@phosphor-icons/react/dist/ssr";

// import { SideBar } from "@/app/dashboard/components/sidebar";
// import { UserButton } from "@clerk/nextjs";

// Add this line!

export default function Dashboard() {
  return (
    <main className="w-full min-h-auto space-y-6 p-5">
      {/* <div className="w-full flex items-baseline justify-between gap-8 flex-wrap">
       
        <div className="rounded-3xl ds:w-full md:w-fit px-8 py-1 flex items-baseline justify-between gap-4 border-primary/80 bg-primary/10 border-[0.5px] text-sm">
          <PrimaryText>$40,0000</PrimaryText>
          <span className="text-xs text-primary">Bonus</span>
        </div>
      </div> */}
      <section className="w-full flex items-center flex-wrap gap-6 ">
        <div className="rounded-sm py-3 ds:w-full md:max-w-[80%] flex-wrap w-full shadow-xl bg-background flex items-center gap-8 px-4">
          
          <select className="bg-background px-2 text-sm outline-none  border-white/10 shadow-2xl w-fit">
            <option
              className="bg-transparent"
              defaultValue={"bitcoin"}
              value="bitcoin"
            >
              Bitcoin
            </option>
            <option className="bg-transparent" value="Litecoin">
              Litecoin
            </option>
            <option className="bg-transparent" value="Ethereum">
              Ethereum
            </option>
            <option className="bg-transparent" value="Polkadot">
              Polkadot
            </option>
            <option className="bg-transparent" value="Solana">
              Solana
            </option>
            <option className="bg-transparent" value="Chainlink">
              Chainlink
            </option>
          </select>
          <select className="bg-background px-2 text-sm outline-none  border-transparent">
            <option className="bg-transparent" defaultValue={"USD"} value="USD">
              USD
            </option>
            <option className="bg-transparent" value="PND">
              PND
            </option>
            <option className="bg-transparent" value="YEN">
              YEN
            </option>
          </select>
          <div className="">
            <h4 className="text-primary text-xs">37,930.00</h4>
            <p className="text-white/60 text-[11px]">37,930.00</p>
          </div>
          <div className="">
            <h4 className="text-primary text-xs">129.5 +0.8%</h4>
            <p className="text-white/60 text-[11px]">24th changes</p>
          </div>
          <div className="">
            <h4 className="text-white/90 text-xs">37,440.01</h4>
            <p className="text-white/60 text-[11px]">24th high</p>
          </div>
          <div className="">
            <h4 className="text-white/90 text-xs">37,340.01</h4>
            <p className="text-white/60 text-[11px]">24th low</p>
          </div>
          <div className="">
            <h4 className="text-white/90 text-xs">37,890.60</h4>
            <p className="text-white/60 text-[11px]">24th volume(BTC)</p>
          </div>
         <Bank />
         <ChartBar />
          <button className="">
            <PaperPlaneTilt size={20} />
          </button>
        </div>
        <div className="flex flex-grow items-center gap-3">
          <button className="rounded-sm px-5 hover:bg-primary/80 smooth shadow-xl w-fit py-1 text-sm bg-primary">
            Sell coin
          </button>
          <button className="rounded-sm px-5 hover:bg-primary/80 smooth shadow-xl w-fit py-1 text-sm bg-primary">
            Buy *
          </button>
          {/* <button className="rounded-sm px-5 hover:bg-primary/80 smooth shadow-xl flex-grow items-center flex gap-3 py-1 text-sm bg-primary">
            Deposit
          </button> */}
        </div>
      </section>
      <section className="w-full flex justify-between flex-wrap gap-8">
        <div className="flex flex-wrap gap-6 ">
          <div className="rounded-md bg-background sm:w-[250px] ds:w-full h-fit p-6 space-y-4">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-white font-dm-medium">BTC/USDT</h1>
              <TrendUp className="text-green-600"/>
            </div>
            <h1 className="font-dm-semibold text-xl">$34.850,10</h1>
            <p className="text-sm text-white/60 ">
            +0.8%</p>
          </div>
          <div className="rounded-md bg-background sm:w-[250px] ds:w-full h-fit p-6 space-y-4">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-white font-dm-medium">ETH/USDT</h1>
              <TrendDown className="text-red-500"/>
            </div>
            <h1 className="font-dm-semibold text-xl">$4.850,10</h1>
            <p className="text-sm text-white/60 ">
            -2.6%</p>
          </div>
          <div className="rounded-md bg-background sm:w-[250px] ds:w-full h-fit p-6 space-y-4">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-white font-dm-medium">LTC/USDT</h1>
              <TrendUp className="text-green-600"/>
            </div>
            <h1 className="font-dm-semibold text-xl">$87.350,00</h1>
            <p className="text-sm text-white/60 ">
            +5.8%</p>
          </div>
        </div>
        <div className="h-[300px] ds:w-full  md:w-[240px] rounded-md bg-background"></div>
      </section>
    </main>
  );
}
