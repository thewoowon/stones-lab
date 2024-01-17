import Container from "./container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <svg
            width="200"
            height="200"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M242.04 38C242.04 38 244.926 118.395 275.902 154.116C293.607 174.533 332.425 194.12 332.425 194.12H151.655L242.04 136.415V38Z"
              fill="#171717"
            />
            <rect
              x="70"
              y="193.119"
              width="183.338"
              height="34.9215"
              fill="#171717"
            />
            <rect
              x="197.361"
              y="227.041"
              width="183.851"
              height="35.9215"
              fill="#171717"
            />
            <path
              d="M127.518 369.295H311.882V390.535L127.518 442.219V369.295Z"
              fill="#171717"
            />
            <path
              d="M216.875 404.216C216.875 404.216 265.819 430.363 300.083 432.137C340.652 434.238 400.213 404.216 400.213 404.216V425.157L216.875 476.113V404.216Z"
              fill="#171717"
            />
            <path
              d="M258.562 261.962H441.811V297.503C441.811 297.503 385.042 289.348 350.186 297.503C299.454 309.372 237.417 369.295 237.417 369.295L258.562 261.962Z"
              fill="#171717"
            />
          </svg>

          <div
            className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"
            style={{
              fontFamily: "Nanum Myeongjo, serif",
            }}
          >
            <div className="text-lg">
              <span className="text-lg font-bold">스톤즈랩</span>&nbsp;블로그,&nbsp;
            </div>
            <div className="text-lg text-neutral-600">기록의 석재&nbsp;</div>
            <div className="text-lg text-neutral-600">
              그리고&nbsp;
              <Link href={"https://tikitaka.chat"} className="font-bold text-blue-500">
                티키타카
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
