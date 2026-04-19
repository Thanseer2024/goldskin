

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{
        width: "388px",
        height: "328px",
        backgroundColor: "#F6F2EB",
        borderRadius: "16px",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        boxShadow: "13px 9px 38px -9px rgba(0, 0, 0, 0.1)",
      }}
    >

      <div className="w-16 h-16 rounded-full bg-[#7B6ED6] flex items-center justify-center shrink-0">
        {icon ? (
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 bg-white opacity-20 rounded-full" />
        )}
      </div>


      <h3
        className="text-[#111827] font-bold text-lg"
        style={{ margin: 0 }}
      >
        {title}
      </h3>


      <p
        className="text-[#555] text-sm leading-6"
        style={{ margin: 0, overflow: "hidden" }}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
