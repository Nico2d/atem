import { useState } from "react";
import styled from "styled-components";
import { CardContainer } from "../components/atoms/cardContainer";
import { PageHeading } from "../components/atoms/pageHeading";
import { Select } from "../components/atoms/select";
import { FontSizeSelector } from "../components/molecules/fontSizeSelector";
import { ThemeToggler } from "../components/molecules/themeToggler";
import { ChangeDefaultSettingsForm } from "../components/organisms/changeDefaultSettingsForm";
import { ChangePasswordForm } from "../components/organisms/changePasswordForm";
import { ChangeUsernameForm } from "../components/organisms/changeUsernameForm";
import { DeleteAccountForm } from "../components/organisms/deleteAccountForm";
import { TemplateMobileSettings } from "../components/templates/templateMobileSettings";
import { TemplateWithSidebar } from "../components/templates/TemplateWithSidebar";
import { useDarkMode } from "../Hooks/useDarkMode";
import { useFontSizeSelector } from "../Hooks/useFontSizeSelector";
import { useMediaQuery } from "../Hooks/useMediaQuery";
import { IconKeyboardArrowRight } from "../public/icons/iconKeyboardArrowRight";
import { device } from "../Styles/breakpoints";

type FormType = {
  name: string;
  form: JSX.Element;
};

const Settings = () => {
  const [theme, themeToggler] = useDarkMode();
  const [fontSize, fontController] = useFontSizeSelector();
  const isDesktop = useMediaQuery(device.tablet);
  const [isClose, setIsClose] = useState<FormType>(null);

  const formsArray: FormType[] = [
    { name: "Zmiena hasła", form: <ChangePasswordForm /> },
    { name: "Zmień Nazwe użytkownika", form: <ChangeUsernameForm /> },
    { name: "Domyślne ustawienia", form: <ChangeDefaultSettingsForm /> },
    { name: "Usuń konto", form: <DeleteAccountForm /> },
  ];

  if (isClose) {
    return (
      <TemplateMobileSettings
        title={isClose.name}
        backToSettings={() => setIsClose(null)}
      >
        {isClose.form}
      </TemplateMobileSettings>
    );
  }

  return (
    <TemplateWithSidebar>
      <PageHeading title="Ustawienia" />
      <CardContainer height="300px" width="932px">
        <AccoutSection>
          <div>
            <CardHeading>Konto</CardHeading>
            <CardDesc>Personalne informacje</CardDesc>

            <CardField onClick={() => setIsClose(formsArray[0])}>
              {formsArray[0].name} <IconKeyboardArrowRight />
            </CardField>
            <CardField onClick={() => setIsClose(formsArray[1])}>
              {formsArray[1].name} <IconKeyboardArrowRight />
            </CardField>
            <CardField onClick={() => setIsClose(formsArray[2])}>
              {formsArray[2].name} <IconKeyboardArrowRight />
            </CardField>

            <DeleteAccount onClick={() => setIsClose(formsArray[3])}>
              {formsArray[3].name}
            </DeleteAccount>
          </div>

          {isDesktop && <div>Druga sekcja</div>}
        </AccoutSection>
      </CardContainer>
      <CardWrapper>
        <CardContainer height="300px" width="450px">
          <CardHeading>Powiadomienia </CardHeading>
          <CardDesc>
            Wybierz rodzaj powiadomień, które chcesz otrzymywać
          </CardDesc>

          <CardField>
            sprzedanych pliki <IconKeyboardArrowRight />
          </CardField>
          <CardField>
            otrzymane opinie <IconKeyboardArrowRight />
          </CardField>
        </CardContainer>

        <CardContainer height="300px" width="450px">
          <CardHeading>Personalizacja </CardHeading>
          <CardDesc>Dostosuj treść i interfejs pod siebie</CardDesc>

          <CardField>
            Ciemny motyw
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          </CardField>
          <CardField>
            Wielkość liter
            <FontSizeSelector
              fontSize={fontSize}
              fontController={fontController}
            />
          </CardField>
          <CardField>
            Język
            <Select
              optionList={[
                { name: "Polski", value: "polish" },
                { name: "Angielski", value: "english" },
              ]}
              method={(value) => {
                console.log("zmiana jezyka na:", value);
              }}
            />
          </CardField>
        </CardContainer>
      </CardWrapper>
    </TemplateWithSidebar>
  );
};

export default Settings;

const CardHeading = styled.h3`
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.2}rem;
  font-weight: 400;
`;

const CardDesc = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.8}rem;
  margin: 0 0 2rem;
`;

const CardField = styled.div`
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  > svg {
    fill: ${({ theme }) => theme.colors.white};
    float: right;
  }
`;

const DeleteAccount = styled(CardField)`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 400;
  position: absolute;
  bottom: 0;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column;

  @media ${device.laptop} {
    flex-flow: row;
  }
`;

const AccoutSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  position: relative;
  height: 100%;
  flex-flow: column;

  @media ${device.tablet} {
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
