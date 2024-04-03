import Image from "next/image";

export default function HexShape({ UpPayout }) {
  return (
    <>
      <div className="relative">
        <Image src={"/UpHex.png"} height={100} width={300} alt="hexUp" />
        <div className="absolute top-4 left-[100px] flex items-center justify-center">
          <div className="text-white text-center text-lg flex flex-col">
            <span className="text-2xl font-bold text-[#4cd5b3]">Up </span>
            <span className="text-[#8d87bc] font-semibold">
              {UpPayout}payout
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
