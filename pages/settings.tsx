import { useState } from "react";
import styled from "styled-components";
import { CardContainer } from "../components/atoms/cardContainer";
import { CardField } from "../components/atoms/cardField";
import { PageHeading } from "../components/atoms/pageHeading";
import { Select } from "../components/atoms/select";
import { FontSizeSelector } from "../components/molecules/fontSizeSelector";
import { ThemeToggler } from "../components/molecules/themeToggler";
import { ChangeDefaultSettingsForm } from "../components/organisms/changeDefaultSettingsForm";
import { ChangePasswordForm } from "../components/organisms/changePasswordForm";
import { ChangeUsernameForm } from "../components/organisms/changeUsernameForm";
import { DeleteAccountForm } from "../components/organisms/deleteAccountForm";
import { NotificationForm } from "../components/organisms/notificationForm";
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
  const isDesktop = useMediaQuery(device.laptopM);
  const [isClose, setIsClose] = useState<FormType>(null);

  const formsArray: FormType[] = [
    { name: "Zmiena hasła", form: <ChangePasswordForm /> },
    { name: "Zmień nazwe użytkownika", form: <ChangeUsernameForm /> },
    { name: "Domyślne ustawienia", form: <ChangeDefaultSettingsForm /> },
    { name: "Usuń konto", form: <DeleteAccountForm /> },
    { name: "Sprzedane pliki", form: <NotificationForm /> },
    { name: "Otrzymane opinie", form: <NotificationForm /> },
  ];

  if (isClose && !isDesktop) {
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
      <CardContainer height="300px" width={!isDesktop ? "450px" : "932px"}>
        <AccoutSection>
          <div style={{ flex: "50%" }}>
            <CardHeading>Konto</CardHeading>
            <CardDesc>Personalne informacje</CardDesc>

            <CardField
              onClick={() => setIsClose(formsArray[0])}
              isActive={isClose && isClose.name == formsArray[0].name}
            >
              {formsArray[0].name} {!isDesktop && <IconKeyboardArrowRight />}
            </CardField>
            <CardField
              onClick={() => setIsClose(formsArray[1])}
              isActive={isClose && isClose.name == formsArray[1].name}
            >
              {formsArray[1].name} {!isDesktop && <IconKeyboardArrowRight />}
            </CardField>
            <CardField
              onClick={() => setIsClose(formsArray[2])}
              isActive={isClose && isClose.name == formsArray[2].name}
            >
              {formsArray[2].name} {!isDesktop && <IconKeyboardArrowRight />}
            </CardField>

            <DeleteAccount
              onClick={() => setIsClose(formsArray[3])}
              isActive={isClose && isClose.name == formsArray[3].name}
            >
              {formsArray[3].name}
            </DeleteAccount>
          </div>

          {isDesktop && <StyledScene>{isClose && isClose.form}</StyledScene>}
        </AccoutSection>
      </CardContainer>
      <CardWrapper>
        <CardContainer height="300px" width="450px">
          <CardHeading>Powiadomienia </CardHeading>
          <CardDesc>
            Wybierz rodzaj powiadomień, które chcesz otrzymywać
          </CardDesc>

          <CardField onClick={() => setIsClose(formsArray[4])}>
            {formsArray[4].name} {!isDesktop && <IconKeyboardArrowRight />}
          </CardField>
          <CardField onClick={() => setIsClose(formsArray[5])}>
            {formsArray[5].name} {!isDesktop && <IconKeyboardArrowRight />}
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

const StyledScene = styled.div`
  flex: 50%;

  div {
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
  }
`;

const CardHeading = styled.h3`
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.2}rem;
  font-weight: 400;

  @media ${device.laptopM} {
    font-size: ${({ theme }) => theme.fonts.fontSize * 1.5}rem;
  }
`;

const CardDesc = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.8}rem;
  margin: 0 0 2rem;
`;

const DeleteAccount = styled(CardField)`
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  bottom: 0;

  @media ${device.laptopM} {
    font-size: ${({ theme }) => theme.fonts.fontSize * 1.1}rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column;

  @media ${device.laptopM} {
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
