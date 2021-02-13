import React, { useState } from "react";
import styled from "styled-components";
import { PageHeading } from "../components/atoms/pageHeading";
import { TemplateMobileSettings } from "../components/templates/templateMobileSettings";
import { TemplateWithSidebar } from "../components/templates/TemplateWithSidebar";
import { useMediaQuery } from "../Hooks/useMediaQuery";
import { device } from "../Styles/breakpoints";
import { Personalization } from "../components/organisms/personalization";
import { Notification } from "../components/organisms/notifications";
import { Account } from "../components/organisms/account";
import { FormType } from "../Types/form";

const Settings = () => {
  const isDesktop = useMediaQuery(device.laptopM);
  const [isClose, setIsClose] = useState<FormType>(null);

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

      <Account isClose={isClose} setIsClose={setIsClose} />

      <CardWrapper>
        <Notification setIsClose={setIsClose} />
        <Personalization />
      </CardWrapper>
    </TemplateWithSidebar>
  );
};

export default Settings;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column;

  @media ${device.laptopM} {
    flex-flow: row;
  }
`;
