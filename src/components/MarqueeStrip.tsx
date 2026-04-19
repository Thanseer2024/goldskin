
import starIcon from "../assets/thinsmooth2.png";

const items = [
  "Skincare Product",
  "Cream",
  "Moisturizer",
  "Toner",
  "Serum",
  "Skincare Product",
  "Cream",
  "Moisturizer",
  "Toner",
  "Serum",
];

const MarqueeStrip = () => {
  return (
    <div
      className="relative overflow-hidden border-t border-b"
      style={{
        width: "100%",
        height: "136px",
        backgroundColor: "#F6F2EB",
        borderColor: "#525252",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap items-center py-10">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-10 flex-shrink-0">
            <span
              style={{
                fontFamily: "'Vidaloka', serif",
                fontSize: "50px",
                fontWeight: 400,
                lineHeight: "1",
                letterSpacing: "-0.02em",
                color: "#111827",
                display: "inline-block",
                marginRight: "40px",
              }}
            >
              {item}
            </span>

            <div
              style={{
                width: "49px",
                height: "49px",
                flexShrink: 0,
                backgroundColor: "#806CCB",
                WebkitMaskImage: `url(${starIcon})`,
                maskImage: `url(${starIcon})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                marginRight: "40px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;

