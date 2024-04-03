import { MdBlock, MdOutlineWatchLater } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";

export default function CardHeader({ status }) {
  return (
    <>
      {status === "Expired" && (
        <div className="h-[40px] rounded-t-xl w-full bg-[#dadae9] text-[#c2c7d4] flex items-center pl-2 gap-2 ">
          <div className="text-2xl">
            <MdBlock />
          </div>{" "}
          <span>Expired</span>
        </div>
      )}
      {status === "Next" && (
        <div className="h-[40px] rounded-t-xl w-full bg-[#7645d9] text-[#ffffff] flex items-center pl-2 gap-2 ">
          <div className="text-2xl">
            <FaRegPlayCircle />
          </div>{" "}
          <span>Next</span>
        </div>
      )}
      {status === "Later" && (
        <div className="h-[40px] rounded-t-xl w-full bg-[#e7e3eb] text-[#321966] flex items-center pl-2 gap-2 ">
          <div className="text-2xl">
            <MdOutlineWatchLater />
          </div>{" "}
          <span>Later</span>
        </div>
      )}
      {status === "Live" && (
        <div className="h-[50px] rounded-t-xl w-full bg-[#ffffff] text-[#7645d9] flex flex-col justify-center gap-[6px] ">
          <div className="flex h-full items-center pl-2 gap-2">
            <div className="text-2xl">
              <FaRegPlayCircle />
            </div>{" "}
            <span>Live</span>
          </div>
          <div className="h-[10px] w-full bg-[#ece8f2]">
            <div className="h-full w-[80%] bg-[#7645d9]"></div>
          </div>
        </div>
      )}
    </>
  );
}

//FaRegPlayCircle
