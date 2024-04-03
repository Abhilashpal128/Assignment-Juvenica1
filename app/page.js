import Image from "next/image";
import { PiTrophyBold } from "react-icons/pi";
import {
  FaRegCircleQuestion,
  FaArrowLeftLong,
  FaArrowRightLong,
  FaArrowDown,
} from "react-icons/fa6";
import { RxCountdownTimer } from "react-icons/rx";
import coinImage from "../public/Images/coinIcon.png";
import clockImage from "../public/Images/clock.png";
import CardArrow from "../public/Images/cardArrow.png";
import HexShape from "./layouts/HexShape";
import HexDownShape from "./layouts/HexDownShape";
import CardHeader from "./layouts/CardHeader";
import HexDownWhite from "./layouts/HexDownWhite";

export default function Home() {
  const data = [
    {
      status: "Expired",
      Lastprise: "228.5334",
      DownValue: "0.4141",
      LockedPrise: "228.9473",
      pricePool: "8.5143",
      upPayout: "2.15x",
      downPayout: "1.87x",
    },
    {
      status: "Expired",
      Lastprise: "228.9473",
      DownValue: "0.5791",
      LockedPrise: "229.5264",
      pricePool: "5.2427",
      upPayout: "1.76x",
      downPayout: "2.32x",
    },
    {
      status: "Live",
      Lastprise: "228.5332",
      DownValue: "0.4141",
      LockedPrise: "228.9473",
      pricePool: "8.5143",
      upPayout: "2.15x",
      downPayout: "1.87x",
    },
    {
      status: "Next",
      Lastprise: "228.5332",
      DownValue: "0.4141",
      LockedPrise: "2289473",
      pricePool: "8.5143",
      upPayout: "1.35x",
      downPayout: "3.84x",
    },
    {
      status: "Later",
      Lastprise: "228.5332",
      DownValue: "0.4141",
      LockedPrise: "2289473",
      pricePool: "8.5143",
      upPayout: "2.15x",
      downPayout: "1.87x",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-tl flex flex-col py-9 from-[#a3a9d6] to-[#c5cfeb] w-full h-screen">
        <div className="grid grid-cols-3 justify-center items-center mx-8 py-8">
          <div className="">
            <div className="flex w-full items-center   ">
              <Image
                src={coinImage}
                alt="icon"
                height={100}
                width={80}
                className="absolute"
              />
              <div className=" w-[50%] rounded-r-full h-12 bg-white ml-[67px] flex gap-2 justify-center items-center ">
                <h1 className="text-[#280e5f] text-xl font-extrabold">
                  BNBUSD
                </h1>
                <p className="text-sm font-semibold text-[#301665]">$2285332</p>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-[30%] rounded-full h-12 bg-white flex gap-2 justify-evenly items-center mx-auto ">
              <div className="text-xl text-[#30cbd6]">
                <FaArrowLeftLong />
              </div>
              <div>
                <Image
                  src={CardArrow}
                  alt="cardArrow"
                  height={100}
                  width={80}
                />
              </div>
              <div className="text-xl text-[#30cbd6]">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
          <div className="flex gap-12">
            {" "}
            <div className=" w-[30%] rounded-full h-12 bg-white flex gap-2  items-center ">
              <div className="flex gap-2 items-center ml-2">
                <h1 className="text-xl text-[#7645d9] font-bold">00:38</h1>
                <p>5m</p>
              </div>
              <div className="absolute pl-[100px]">
                <Image src={clockImage} height={100} width={100} alt="clock" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-white text-xl font-semibold rounded-xl bg-[#7a6eaa]">
                <div className="p-4">
                  <FaRegCircleQuestion />
                </div>
              </div>
              <div className="text-white text-xl font-semibold rounded-xl bg-[#7a6eaa]">
                <div className="p-4">
                  <PiTrophyBold />
                </div>
              </div>
              <div className="text-white text-xl font-semibold rounded-xl bg-[#e9eaeb]">
                <div className="p-4">
                  <RxCountdownTimer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex overflow-x-auto justify-center gap-4   items-center">
            {data &&
              data.map((item) => (
                <div
                  key={item.pricePool}
                  className={
                    item.status === "Expired"
                      ? "opacity-60 w-[25%] flex flex-col justify-center  items-center bg-[#ffffff] rounded-xl"
                      : "w-[25%] flex flex-col justify-center  items-center bg-[#ffffff] rounded-xl"
                  }
                >
                  <CardHeader status={item.status} />

                  <div className="pt-3">
                    <HexShape UpPayout={item.upPayout} />
                  </div>

                  <div className=" mx-4 border-4 border-[#ed4b9e] w-[350px]  rounded-xl bg-[#ffffff]">
                    {item.status === "Next" ? (
                      <>
                        <div className="flex flex-col gap-1 py-5 mx-5">
                          <div className="flex  justify-between text-[#290f60] font-extrabold">
                            <span>Prize Pool</span>
                            <span>{item.pricePool}</span>
                          </div>
                          <div className="flex flex-col gap-2 text-white font-bold">
                            <button className="bg-[#32d0aa] p-3 rounded-xl mx-3">
                              Enter Up
                            </button>
                            <button className="bg-[#ed4b9e] p-3 rounded-xl mx-3">
                              Enter Down
                            </button>
                          </div>
                        </div>
                      </>
                    ) : item.status === "Later" ? (
                      <>
                        <div className="flex flex-col py-3  justify-center gap-2 items-center text-[#280e5f]">
                          <div className="text-lg font-bold">Entry Starts</div>
                          <div className="text-2xl font-extrabold">~00:38</div>
                        </div>
                      </>
                    ) : (
                      <div>
                        <div className="py-4 mx-3 flex flex-col gap-4">
                          <div className=" font-bold text-[#7b6faa]">
                            LAST PRICE
                          </div>
                          <div className="flex justify-between">
                            <div className="text-2xl font-bold text-[#ed4b9e]">
                              ${item.Lastprise}
                            </div>
                            <div className="bg-[#ed4b9e] p-1 rounded-md text-white font-semibold flex items-center gap-2">
                              <FaArrowDown /> $ -{item?.DownValue}
                            </div>
                          </div>

                          <div className="text-[#3b236d]">
                            <div className="flex justify-between font-semibold ">
                              <div>Locked Price</div>
                              <div>${item?.LockedPrise}</div>
                            </div>
                            <div className="flex justify-between font-extrabold">
                              <div>Prize Pool</div>
                              <div>{item?.pricePool}BNB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="pb-3">
                    {item.status === "Next" || item.status === "Later" ? (
                      <HexDownWhite DownPayout={item.downPayout} />
                    ) : (
                      <HexDownShape DownPayout={item.downPayout} />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* <div className="w-60 h-60  relative rounded-xl">
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-gray-400 rounded-xl"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        ></div>
      </div>
      <div className=" ml-[7px] w-[228px] h-10 bg-gray-400 "></div> */}
    </>
  );
}
