import { COLORS } from "@/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";

const ProfileCard = ({
  thumbnail,
  profile: { name, role, description },
}: {
  thumbnail: string;
  profile: {
    name: string;
    role: string;
    description: string;
  };
}) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
        }}
      >
        <Image src={thumbnail} alt={"thumbnail"} width={120} height={120} />
      </div>
      <div>
        <div
          style={{
            color: COLORS.DARK_BG,
            fontSize: "1.5rem",
            fontWeight: 500,
          }}
        >
          {name}
        </div>
        <div
          style={{
            color: COLORS.LIGHT_BG,
            marginBottom: "10px",
            fontWeight: 300,
          }}
        >
          {role}
        </div>
        <p
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          {description}
        </p>
      </div>
    </Container>
  );
};

export default ProfileCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 0.4em;
  background: ${COLORS.WHITE};
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 300px;
  border: 2px solid rgba(0, 0, 0, 0.1);

  // awesome hover effect
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
