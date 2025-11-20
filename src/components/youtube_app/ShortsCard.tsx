import { MoreVertical } from "lucide-react";
import YtShortsComponentType from "../../types/YtShortsComponentType";
interface ShortsCardProps {
  item: YtShortsComponentType;
}
const ShortsCard = ({ item }: ShortsCardProps) => {
  const { imgurl, title, views } = item;
  return (
    <>
      <div className="flex flex-col max-w-xs bg-white  p-4 rounded space-y-2">
        <div className="rounded-xl overflow-hidden">
          <img
            src={imgurl}
            alt="Thumbnail"
            className="aspect-9/16 object-cover"
          />
        </div>
        <div className="flex flex-row justify-between  ">
          <span className="text-sm font-bold text-black  line-clamp-2">
            {title}
          </span>
          <MoreVertical className="w-8 h-4 text-black ml-2 cursor-pointer" />
        </div>
        <span className="text-sm text-gray-500 font-semibold ">
          {views} views
        </span>
      </div>
    </>
  );
};

export default ShortsCard;
