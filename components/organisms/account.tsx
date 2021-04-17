import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { IconKeyboardArrowRight } from "../../public/icons/iconKeyboardArrowRight";
import { device } from "../../Styles/breakpoints";
import { FormType } from "../../Types/formType";
import { CardContainer } from "../atoms/card/cardContainer";
import { CardDesc } from "../atoms/card/cardDesc";
import { CardField } from "../atoms/card/cardField";
import { CardHeading } from "../atoms/card/cardHeading";
import { ChangeDefaultSettingsForm } from "../molecules/forms/changeDefaultSettingsForm";
import { ChangePasswordForm } from "../molecules/forms/changePasswordForm";
import { ChangeUsernameForm } from "../molecules/forms/changeUsernameForm";
import { DeleteAccountForm } from "../molecules/forms/deleteAccountForm";

type AccountTypes = {
  setIsClose: (value: FormType) => void;
  isClose: FormType;
};

export const Account: React.FC<AccountTypes> = ({ isClose, setIsClose }) => {
  const isDesktop = useMediaQuery(device.laptopM);

  const formsArray: FormType[] = [
    { name: "Zmiana hasła", form: <ChangePasswordForm /> },
    { name: "Zmień nazwę użytkownika", form: <ChangeUsernameForm /> },
    { name: "Domyślne ustawienia", form: <ChangeDefaultSettingsForm /> },
    { name: "Usuń konto", form: <DeleteAccountForm /> },
  ];

  return (
    <CardContainer height="300px" width={!isDesktop ? "450px" : "932px"}>
      <AccountSection>
        <div style={{ flex: "50%" }}>
          <CardHeading>Konto</CardHeading>
          <CardDesc>Informacje personalne</CardDesc>

          {formsArray.map((item, index) => {
            return (
              <AccountFields
                key={index}
                onClick={() => setIsClose(item)}
                isActive={isClose && isClose.name == item.name}
              >
                {item.name} {!isDesktop && <IconKeyboardArrowRight />}
              </AccountFields>
            );
          })}
        </div>

        {isDesktop && <StyledScene>{isClose && isClose.form}</StyledScene>}
      </AccountSection>
    </CardContainer>
  );
};

const AccountFields = styled(CardField)`
  &:last-child {
    color: ${({ theme }) => theme.colors.red};

    > svg {
      display: none;
    }
  }
`;

const AccountSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  position: relative;
  height: 100%;
  flex-flow: column;

  @media ${device.laptopM} {
    flex-flow: row;

    ::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 90%;
      top: 5%;
      left: 50%;
      background: ${({ theme }) => theme.colors.linesColor};
    }
  }
`;

const StyledScene = styled.div`
  flex: 50%;

  div {
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
  }
`;
