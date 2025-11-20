import WhatsAppComponentsType from "../types/WhatsAppMessageType";
import WhatsAppComponent from "./WhatsAppComponent";

const WhatsAppListComponent = () => {
  const msg1: WhatsAppComponentsType = {
    title: "Arhum Zeeshan shabbir ",
    subtitle: "Hello what are u doing ",
    timestamp: "19/10/2025",
  };
  const msg2: WhatsAppComponentsType = {
    title: "Ali ",
    subtitle:
      "Hello what are u doing arhum arhu asdmsadmas dmsa dasmd amsd sam dmasd sadmas dmas fmads dfmas fasfksajaks dkasd adk sa  m arhum arhum arhum arhum arhum arhum arhum arhum arhum ",
    timestamp: "19/10/2025",
    imgurl: "https://placehold.co/400",
  };

  return (
    <div>
      <ul className="space-y-2">
        <li>
          <WhatsAppComponent data={msg1} />
        </li>
        <li>
          <WhatsAppComponent data={msg2} />
        </li>
      </ul>
    </div>
  );
};

export default WhatsAppListComponent;
