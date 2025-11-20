import { ArrowDownLeft } from "lucide-react";

interface SignBoardProps {
  urdu_road_name: string;
  road_name: string;
  highway: string;
  highway_urdu:string;
}

const SignBoardComponent = ({ urdu_road_name: urduname, road_name: name, highway,highway_urdu: highwayurdu }: SignBoardProps) => {
  return (
    <div className="flex border-4 border-white">
      <div className="bg-[#FFB300] min-h-md  w-36 flex items-center justify-center">
        <ArrowDownLeft className="size-full" />
      </div>

      <div className="min-w-md max-w-md">
        <div className="bg-[#0175D5]  h-48 pr-5  pt-10 text-right flex flex-col gap-y-6  ">
          <span className="text-white font-bold text-5xl">{urduname}</span>
          <span className="text-white font-bold text-5xl">{name}</span>
        </div>

        <div className="bg-[#008F98]  pl-5 pr-5 pt-10 text-right flex flex-col gap-y-6 w-2/2 pb-5">
          <span className="text-white font-bold text-5xl ">{highwayurdu}</span>
          <span className="text-white font-bold text-5xl ">{highway}</span>
        </div>
        <div className="bg-[#008F98]  pl-5 pr-5 pt-10 text-right flex flex-col gap-y-6 w-2/2 pb-5">
          <span className="text-white font-bold text-5xl ">{highwayurdu}</span>
          <span className="text-white font-bold text-5xl ">{highway}</span>
        </div>
      </div>
    </div>
  );
};

export default SignBoardComponent;
