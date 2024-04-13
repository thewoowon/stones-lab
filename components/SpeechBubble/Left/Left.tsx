import { COLORS } from "@/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";

type LeftSpeechBubbleProps = {
  title: string;
  description: string;
  thumbnail: string;
};

const LeftSpeechBubble = ({
  title,
  description,
  thumbnail,
}: LeftSpeechBubbleProps) => {
  return (
    <Container>
      <SpeechBubble>
        <Title>{title}</Title>
        <Description>
          {description.split("\n").map((line, index) => (
            <div key={index}>{line ? line : <br />}</div>
          ))}
        </Description>
      </SpeechBubble>
      <Thumbnail>
        <Image src={thumbnail} alt={title} width={70} height={70} />
      </Thumbnail>
    </Container>
  );
};

export default LeftSpeechBubble;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px 0;
`;

const SpeechBubble = styled.div`
  flex: 1;
  background: ${COLORS.ORANGE};
  border-radius: 0.4em;
  padding: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 30px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left-color: ${COLORS.ORANGE};
    border-right: 0;
    margin-top: -10px;
    margin-right: -10px;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${COLORS.TEXT};
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 1rem;
  color: ${COLORS.TEXT};
`;

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
`;
