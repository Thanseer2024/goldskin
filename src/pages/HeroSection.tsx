import { CSSProperties } from "react";
import Navbar from "../components/NavBar";

import starIcon from "../assets/thinsmooth2.png";
import buttonEllipse from "../assets/Ellipse 10.png";
import starIconBig from "../assets/thinsmooth.png";
import maskGroup from "../assets/Mask group.png";
import vector2 from "../assets/Vector 2.png";
import vector3 from "../assets/Vector 3.png";
import archFrame from "../assets/Rectangle 5.png";
import placeholder from "../assets/Image Placeholder.png";

const Sparkle = ({ style, className }: { style?: CSSProperties; className?: string }) => (
  <img
    src={starIcon}
    alt="Sparkle"
    className={`absolute pointer-events-none ${className || ""}`}
    style={{ ...style }}
  />
);

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-[#FBE3E5] overflow-hidden px-10 pb-16"
      style={{ height: "1024px", minHeight: "100vh" }}
    >

      <img src={vector2} alt="" className="absolute pointer-events-none"
        style={{ width: "795px", height: "701px", top: "136.13px", left: "573px" }} />
      <img src={vector3} alt="" className="absolute pointer-events-none"
        style={{ width: "795px", height: "695px", top: "128px", left: "629px", opacity: 0.5 }} />
      <img src={starIconBig} alt="" className="absolute pointer-events-none"
        style={{ width: "331px", height: "331px", top: "672px", left: "838px" }} />


      <img src={maskGroup} alt="Product hero" className="absolute pointer-events-none"
        style={{ width: "757.37px", height: "668.91px", top: "160.22px", left: "608px" }} />


      <Sparkle style={{ top: "616px", left: "659px", width: "49px", height: "49px", zIndex: 10 }} />


      <Sparkle style={{ top: "402px", left: "355px", width: "49px", height: "49px", zIndex: 10 }} />


      <img
        src={starIconBig}
        alt=""
        className="absolute pointer-events-none"
        style={{ top: "683px", left: "-126px", width: "251px", height: "251px", opacity: 0.7, zIndex: 1 }}
      />




      <img
        src={archFrame}
        alt=""
        className="absolute pointer-events-none"
        style={{
          top: "384px",
          left: "108px",
          width: "309px",
          height: "303.78px",
          zIndex: 2,
        }}
      />


      <img
        src={placeholder}
        alt="Product"
        className="absolute object-cover"
        style={{
          top: "392px",
          left: "100px",
          width: "309px",
          height: "291px",
          borderRadius: "200px 200px 16px 16px",
          zIndex: 3,
        }}
      />


      <div
        className="absolute flex items-center justify-center"
        style={{
          top: "408px",
          left: "425px",
          width: "56px",
          height: "268px",
          zIndex: 3,
        }}
      >
        <span
          className="text-[#2B2769] whitespace-nowrap"
          style={{
            fontFamily: "'Vidaloka', serif",
            fontWeight: 400,
            fontSize: "50px",
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Our Product
        </span>
      </div>


      <div
        className="absolute flex items-baseline gap-3"
        style={{ top: "704px", left: "108px", zIndex: 3 }}
      >

        <h3
          className="text-[#111827]"
          style={{
            fontFamily: "'Vidaloka', serif",
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "40px",
            letterSpacing: "-0.02em",
            width: "146px",
            height: "40px",
          }}
        >
          Cream Light
        </h3>

        <p
          style={{
            fontFamily: "'Vidaloka', serif",
            fontWeight: 400,
            fontSize: "38px",
            lineHeight: "48px",
            letterSpacing: "-0.02em",
            color: "#806CCB",
            width: "115px",
            height: "48px",
          }}
        >
          $20.00
        </p>
      </div>


      <div
        className="absolute flex text-[#111827]"
        style={{ top: "752px", left: "108px", gap: "4px", zIndex: 3 }}
      >
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ width: "24px", height: "24px", fontSize: "20px", lineHeight: "24px", display: "inline-block", textAlign: "center" }}>★</span>
        ))}
      </div>


      <h1
        className="absolute text-[#111827]"
        style={{
          top: "104px",
          left: "98px",
          width: "672px",
          height: "240px",
          fontFamily: "'Vidaloka', serif",
          fontWeight: 400,
          fontSize: "98px",
          lineHeight: "120px",
          letterSpacing: "0",
          zIndex: 5,
        }}
      >
        Happy Future
        <br />
        Skincare Shop
      </h1>

      <p
        className="absolute text-[#555]"
        style={{
          top: "860px",
          left: "98px",
          width: "346px",
          height: "72px",
          fontFamily: "'Noto Sans', sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0",
          zIndex: 5,
        }}
      >
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc.,
      </p>


      <div className="relative z-10 w-full">
        <Navbar />

        <div className="grid grid-cols-2 gap-6 items-start pt-2">

          <div>


            <div style={{ height: "460px" }} />


            <div className="flex items-center justify-between" style={{ maxWidth: "480px" }}>

              <div className="flex items-center justify-between" style={{ maxWidth: "480px" }}>

                <img
                  src={buttonEllipse}
                  alt=""
                  className="absolute pointer-events-none"
                  style={{
                    top: "841px",
                    left: "500px",
                    width: "251px",
                    height: "83px",
                    maxWidth: "none",
                    transform: "rotate(-6deg)",
                    zIndex: 5,
                  }}
                />

                <button
                  className="absolute bg-transparent z-10 text-center"
                  style={{
                    top: "862px",
                    left: "567px",
                    width: "117px",
                    height: "40px",
                    fontFamily: "'Vidaloka', serif",
                    fontSize: "28px",
                    fontWeight: 400,
                    lineHeight: "40px",
                    letterSpacing: "-0.02em",
                    whiteSpace: "nowrap",
                    zIndex: 6,
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>


          <div className="relative flex justify-center items-center" style={{ height: "560px" }} />
        </div>
      </div>
    </section>
  );
};

export default function GoldSkinHeroPage() {
  return <Home />;
}
