import Image from "next/image";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;
  margin-top: 5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.base.navBg};
  padding: 10px;
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

export const Logo = styled(Image)`
  width: 150px;
  height: 60px;
  object-fit: contain;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.text.offWhite};
`;

export const Icons = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  & a {
    font-size: 2rem;
  }
`;
