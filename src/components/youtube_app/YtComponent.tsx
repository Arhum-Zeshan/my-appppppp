import YtComponentType from "../../types/YtComponentType";
import YtDiscriptionComponent from "./YtDiscriptionComponent";

interface YtComponentProps {
  title: string;
  items?: YtComponentType[];
}


const YtComponent = ({title, items}:YtComponentProps) => {
  
  return (
    <div className="flex flex-col bg-black p-4 w-fit text-white space-y-2">
      <h1 className="font-extrabold capitalize ">{title}</h1>
      {items?.map((item) => (
        <YtDiscriptionComponent key ={item.id}  item={item} />
      ))}



    </div>
  );
};

export default YtComponent;
