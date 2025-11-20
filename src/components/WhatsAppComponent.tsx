import WhatsAppComponentsType from "../types/WhatsAppMessageType";

interface WhatsappProps {
  data:WhatsAppComponentsType;
}
const WhatsAppComponent = ({ data }: WhatsappProps) => {
  const{ title, imgurl,subtitle,timestamp} = data;

  return (
    <div className="m-1 flex gap-4 bg-[#2C2C2C] max-w-xl px-4 py-4 rounded-2xl hover:bg-[#454545] ">
      <img
        src={imgurl || "https://placehold.co/400"}
        alt="profile"
        className="rounded-full w-16 h-16 object-cover"
      />

      <div className="flex flex-col w-full justify-center rounded-xl px-3 py-2 relative ">
        <div className="flex items-center justify-between ">
          <h3 className="font-semibold text-white text-2xl truncate">
            {title}
          </h3>
          <span className="text-xs text-[#D4D4D4]">
            {timestamp}
          </span>
        </div>
        <span className="text-[#D4D4D4] text-sm truncate  w-md">{subtitle}</span>
      </div>
    </div>
  );
};

export default WhatsAppComponent;
