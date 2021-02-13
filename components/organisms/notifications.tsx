import React, { useState } from "react";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { IconKeyboardArrowRight } from "../../public/icons/iconKeyboardArrowRight";
import { device } from "../../Styles/breakpoints";
import { FormType } from "../../Types/form";
import { CardContainer } from "../atoms/card/cardContainer";
import { CardDesc } from "../atoms/card/cardDesc";
import { CardField } from "../atoms/card/cardField";
import { CardHeading } from "../atoms/card/cardHeading";
import { CollapseContainer } from "../atoms/collapseContainer";
import { NotificationForm } from "../molecules/forms/notificationForm";

export const Notification = ({ setIsClose }) => {
  const isDesktop = useMediaQuery(device.laptopM);
  const [notification1, setNotification1] = useState<boolean>(false);
  const [notification2, setNotification2] = useState<boolean>(false);

  const formsArray: FormType[] = [
    { name: "Sprzedane pliki", form: <NotificationForm /> },
    { name: "Otrzymane opinie", form: <NotificationForm /> },
  ];

  return (
    <CardContainer height="300px" width="450px">
      <CardHeading>Powiadomienia </CardHeading>
      <CardDesc>Wybierz rodzaj powiadomień, które chcesz otrzymywać</CardDesc>

      {isDesktop ? (
        <CollapseContainer
          value={notification1}
          method={() => {
            setNotification1(!notification1);
            !notification1 && setNotification2(false);
          }}
          title={[formsArray[0].name, <IconKeyboardArrowRight />]}
        >
          {formsArray[0].form}
        </CollapseContainer>
      ) : (
        <CardField onClick={() => setIsClose(formsArray[0])}>
          {formsArray[0].name} <IconKeyboardArrowRight />
        </CardField>
      )}

      {isDesktop ? (
        <CollapseContainer
          value={notification2}
          method={() => {
            setNotification2(!notification2);
            !notification2 && setNotification1(false);
          }}
          title={[formsArray[1].name, <IconKeyboardArrowRight />]}
        >
          {formsArray[1].form}
        </CollapseContainer>
      ) : (
        <CardField onClick={() => setIsClose(formsArray[1])}>
          {formsArray[1].name} <IconKeyboardArrowRight />
        </CardField>
      )}
    </CardContainer>
  );
};
