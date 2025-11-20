import YtComponentType from "../../types/YtComponentType";

interface YtDiscriptionComponentProps {
  item: YtComponentType;
}

const YtDiscriptionComponent = ({ item }: YtDiscriptionComponentProps) => {
  const { imgurl, subtitle, is_new } = item;
  return (
    <div className="flex flex-row items-center gap-4 min-w-3xs   p-1 rounded-2xl hover:bg-gray-800 ">
      <img src={imgurl} alt="a" className="w-8 h-8 rounded-full" />
      <div className="flex flex-row justify-between  w-full">
        <span className="capitalize ">{subtitle}</span>
        <span className="text-amber-300">{is_new ? 'new': '' }</span>
      </div>
    </div>
  );
};

export default YtDiscriptionComponent;
