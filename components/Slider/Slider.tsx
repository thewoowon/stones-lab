import styled from "@emotion/styled";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Slider = ({
  slides,
  onChange,
}: {
  slides: {
    components: React.ReactNode;
    info: {
      name: string;
      role: string;
      description: string;
      thumbnail: string;
    };
  }[];
  onChange: (index: number) => void;
}) => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={(swiper) => onChange(swiper.activeIndex)}
        style={{ width: "100%", padding: "10px" }}
        pagination={{ clickable: true }}
        mousewheel={true}
        modules={[Pagination]}
        className="my-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setModal(true);
              setIndex(index);
            }}
          >
            {slide.components}
          </SwiperSlide>
        ))}
      </Swiper>
      {modal && (
        <Modal>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <Image
                src={slides[index].info.thumbnail}
                alt={"thumbnail"}
                width={200}
                height={200}
              />
            </div>
            <div>{`안녕하세요! ${slides[index].info.name}입니다.`}</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              onClick={() => {
                if (index > 0) {
                  setIndex(index - 1);
                }
              }}
            >
              Prev
            </Button>
            <Button
              onClick={() => {
                if (index < slides.length - 1) {
                  setIndex(index + 1);
                }
              }}
            >
              Next
            </Button>
            <Button
              onClick={() => {
                setModal(false);
              }}
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  padding: 10px;
  position: relative;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  // background-color: rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease-in-out;
  font-size: 18px;
  padding: 20px;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;
