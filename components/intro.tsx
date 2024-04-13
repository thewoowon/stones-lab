import styled from "@emotion/styled";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-16 mb-16 md:mb-12">
      <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Stones Lab
      </div>
      <div
        className="text-center md:text-left text-md mt-5 md:pl-8"
        style={{
          fontFamily: "Nanum Myeongjo, serif",
        }}
      >
        스톤즈랩 블로그, 기록의 석재 <br /> 그리고 첫 번째 봄 🌸
      </div>
    </section>
  );
};

export default Intro;
