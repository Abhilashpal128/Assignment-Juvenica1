import Image from "next/image";
import HexDownWhiteImage from "../Images/DownHexWhite.png";

export default function HexDownWhite({ DownPayout }) {
  return (
    <div className="relative">
      <Image src={HexDownWhiteImage} height={100} width={300} alt="hexUp" />
      <div className="absolute bottom-6 left-[110px] flex items-center justify-center">
        <div className="text-white text-center text-lg flex flex-col">
          <span className="text-sm text-[#7c70ab] font-semibold">
            {DownPayout} payout
          </span>
          <span className="text-2xl  text-[#ed4b9e] font-bold">Down </span>
        </div>
      </div>
    </div>
  );
}
