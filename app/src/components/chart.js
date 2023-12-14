'use client'
import AreaChartPlot from "./AreaChartPlot";
import BarChartPlot from "./BarChartPlot";
import PieChartPlot from "./PieChartPlot";
import LineChartPlot from "./LineChartPlot";
import RadarChartPlot from "./RadarChartPlot";
import DonutPlot from "./DonutPlot";
import "../../globals.css"

const Charts = () => {
  return (
    <>

<section className="flex-1 justify-center bg-gray-700 shadow rounded max-h-300px">
        <div className=" w-full rounded"> <p className="text-white font-bold text-4xl">Revenue this year</p>
              <p className="py-4 text-white font-bold text-3xl">$324,802 </p>
              <p className="text-green-300">+11.5%</p></div>
      </section>

      <section>
        <div className="flex m-4 gap-2">
          <div className="flex-1 justify-center w-16 bg-gray-700 shadow rounded h-300px">
            <div className="">
              <p className="text-white font-bold">Total returns</p>
              <p className="py-4 text-white  font-bold">$30,000 </p>
              <p className="text-green-300">+0.4%</p>
            </div>
          </div>
          <div className="flex-1 justify-center w-16 bg-gray-700 shadow rounded max-h-300px">
            <div className="">
              <p className="text-white font-bold">Total sales</p>
              <p className="py-4 text-white font-bold">$30,000 </p>
              <p className="text-red-300">-5.24%</p>
            </div>
          </div>
          <div className="flex-1 justify-center w-16  bg-gray-700 shadow rounded max-h-300px">
            <div className="">
              <p className="text-white font-bold">Total subscriptions</p>
              <p className="py-4 text-white font-bold">$30,000 </p>
              <p className="text-green-300">+3.5%</p>
            </div>
          </div>
          <div className="flex-1 justify-center w-16  bg-gray-700 shadow rounded h-300px">
            <div className="">
              <p className="text-white font-bold">Total returns</p>
              <p className="py-4 text-white font-bold ">$30,000 </p>
              <p className="text-green-300">+11.28%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex my-4 gap-3">
        <div className="w-1/2 h-[300px] bg-neutral-400 rounded"><AreaChartPlot/></div>
        <div className=" w-1/2 h-[300px] bg-neutral-400 rounded"><PieChartPlot/></div>

      </section>

      <section className="flex my-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-neutral-400 rounded"><PieChartPlot/></div>
        <div className=" w-1/3 h-[250px] bg-neutral-400 rounded"><LineChartPlot/></div>
        <div className=" w-1/3 h-[250px] bg-neutral-400 rounded"><RadarChartPlot/></div>
      </section>
      <section className="flex my-4 gap-2">
      <div className="w-1/2 h-[300px] bg-neutral-400 rounded"><BarChartPlot/></div>
      <div className="w-1/2 h-[300px] bg-neutral-400 rounded"><DonutPlot/></div>
      </section>
    </>
  );
};

export default Charts;