
import YtComponentType from "../../types/YtComponentType";
import YtComponent from "./YtComponent";

const YtListComponent = () => {
    const items1: YtComponentType[] = [
    {
      id: 1,
      subtitle: "music",
      imgurl: "https://placehold.co/400",
      is_new: true,
    },
    { id: 2, subtitle: "sports", imgurl: "https://placehold.co/400" },
    {
      id: 3,
      subtitle: "news",
      imgurl: "https://placehold.co/400",
      is_new: true,
    },
    { id: 4, subtitle: "movies", imgurl: "https://placehold.co/400" },
    {
      id: 5,
      subtitle: "education",
      imgurl: "https://placehold.co/400",
      is_new: true,
    },
  ];
   const items2: YtComponentType[] = [
    { id: 7, subtitle: "asd music", imgurl: "https://placehold.co/400" },
    { id: 8, subtitle: "sports", imgurl: "https://placehold.co/400" },
    { id: 9, subtitle: "asdnews", imgurl: "https://placehold.co/400" },
    { id: 10, subtitle: "movies", imgurl: "https://placehold.co/400" },
    { id: 11, subtitle: "asdeducation", imgurl: "https://placehold.co/400" },
  ];
  return (
    <>
      <YtComponent title={"More From yt"} items={items1} />
      <hr className="m-1" />
      <YtComponent title={"xyz"} items={items2} />
    </>
  );
};

export default YtListComponent;
