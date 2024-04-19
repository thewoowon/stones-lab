import styled from "@emotion/styled";
import Image from "next/image";

type ImageContainerProps = {
  src: string;
  width?: number;
  height?: number;
};

const ImageContainer = ({
  src,
  width = 1440,
  height = 960,
}: ImageContainerProps) => {
  return (
    <Container>
      <Image
        alt={`Thumbnail`}
        src={src}
        width={width}
        height={height}
        priority
      />
    </Container>
  );
};

export default ImageContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;
