import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignInForm } from "../../Types";
import { Button } from "../atoms/button";
import { CardField } from "../atoms/cardField";
import { Switch } from "../atoms/swtich";

export const NotificationForm = () => {
  const { register, handleSubmit } = useForm<SignInForm>();
  const onSubmit = (data) => console.log(data);

  const [mail, setMail] = useState(false);
  const [push, setPush] = useState(false);

  return (
    <StyledConatiner onSubmit={handleSubmit(onSubmit)} style={{}}>
      <CardField>
        mailowe
        <Switch value={mail} method={() => setMail(!mail)} />
      </CardField>
      <CardField>
        typu push
        <Switch value={push} method={() => setPush(!push)} />
      </CardField>
    </StyledConatiner>
  );
};

const StyledConatiner = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  > div:first-child {
    margin-top: 0;
  }

  > button {
    margin: auto;
    margin-top: 2rem;
  }
`;
