
import ServiceCard from "../components/ServiceCard";
import starIcon from "../assets/thinsmooth2.png";

import FacialIcon from "../assets/serviceIcon1.png";
import MicroneedlingIcon from "../assets/serviceicon2.png";
import HydraFacialIcon from "../assets/serviceIcon3.png";

const services = [
  {
    icon: FacialIcon,
    title: "Facial Wash",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
  },
  {
    icon: MicroneedlingIcon,
    title: "Microneedling",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
  },
  {
    icon: HydraFacialIcon,
    title: "HydraFacial",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{
        height: "648px",
        backgroundColor: "#FC9B9B",
        width: "100%",
      }}
    >
      <div
        className="relative mx-auto h-full"
        style={{ width: "1440px" }}
      >


        <div
          className="absolute pointer-events-none"
          style={{
            width: "223px",
            height: "223px",
            top: "125px",
            left: "391px",
            opacity: 0.4,
            backgroundColor: "#FED7D7",
            WebkitMaskImage: `url(${starIcon})`,
            maskImage: `url(${starIcon})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            width: "223px",
            height: "223px",
            top: "440px",
            left: "1217px",
            opacity: 0.4,
            backgroundColor: "#A291E2",
            WebkitMaskImage: `url(${starIcon})`,
            maskImage: `url(${starIcon})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />


        <h2
          className="absolute text-center text-[#111827] z-10"
          style={{
            top: "80px",
            left: "391px",
            width: "658px",
            height: "80px",
            fontFamily: "'Vidaloka', serif",
            fontSize: "75px",
            fontWeight: 400,
            lineHeight: "80px",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Our Service Skincare
        </h2>
 

        <div
          className="absolute flex gap-8 z-10"
          style={{
            top: "240px",
            left: "104px",
            maxWidth: "1232px",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

