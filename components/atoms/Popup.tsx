import React from "react";
import styled from "styled-components";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { device } from "../../Styles/breakpoints";

type PopupTypes = {
  children: React.ReactNode;
  isClose: boolean;
  onClose: (e) => void;
};

export const Popup: React.FC<PopupTypes> = ({
  children,
  isClose = true,
  onClose,
}) => {
  if (isClose) return null;
  return (
    <StyledPopup>
      {children}
      <StyledIcon onClick={() => onClose(true)}>
        <MdClose />
      </StyledIcon>
    </StyledPopup>
  );
};

const StyledIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.fontColor};
`;

const StyledPopup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: calc(50% + 150px);
  transform: translate(-50%, -50%);
  z-index: 900;
  background: ${({ theme }) => theme.colors.cardColor};
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;
  transition: all 0.25s linear;
  padding: 1.5rem;

  @media ${device.tablet} {
    min-width: 800px;
    min-height: 500px;
    height: fit-content;
  }
`;
