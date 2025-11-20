import YtShortsComponentType from "../../types/YtShortsComponentType";
import ShortsCard from "./ShortsCard";

interface ShortsCoponentProps {
  items?: YtShortsComponentType[];
  heading: string;
}
const ShortsCoponent = ({ items, heading }: ShortsCoponentProps) => {
  return (
    <div className="p-1">
      <h1 className="text-2xl font-extrabold">{heading}</h1>
      <div className="flex flex-row gap-4  py-4">
        {items?.map((item) => (
          <ShortsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShortsCoponent;
