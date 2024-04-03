import Image from "next/image";
import HexDown from "../Images/DownHex.png";

export default function HexDownShape({ DownPayout }) {
  return (
    <>
      <div className="relative">
        <Image src={HexDown} height={100} width={300} alt="hexUp" />
        <div className="absolute bottom-6 left-[110px] flex items-center justify-center">
          <div className="text-white text-center text-lg flex flex-col">
            <span className="text-sm font-semibold">{DownPayout} payout</span>
            <span className="text-2xl font-semibold">Down </span>
          </div>
        </div>
      </div>
    </>
  );
}
