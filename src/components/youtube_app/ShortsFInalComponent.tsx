import YtShortsComponentType from "../../types/YtShortsComponentType"
import ShortsCoponent from "./ShortsCoponent";


const ShortsFInalComponent = () => {
     const items1: YtShortsComponentType[] = [
    {
      id: 1, 
      imgurl: "https://placehold.co/400",
      title: "Sample Short 1",
      views: 1200,
      
    },
    {
      id: 2,
      imgurl: "https://placehold.co/400",
      title: "Sample Short 2",
      views: 3400,
    },
    {
      id: 3,
      imgurl: "https://placehold.co/400",
      title: "Sample Short 3",
      views: 5600,
    },
    {
      id: 4,
      imgurl: "https://placehold.co/400",
      title: "Sample Short 4",
      views: 7800,
    },
    {
      id: 5,
      imgurl: "https://placehold.co/400",
      title: "Sample Short 5",
      views: 9100,
    },

    {
      id: 6,
      imgurl: "https://placehold.co/400",
      title: "Sample Short 6",
      views: 1500,
    }
   ];
  return (
     <ShortsCoponent items={items1} heading="Trending Shorts"/>
  )
}

export default ShortsFInalComponent