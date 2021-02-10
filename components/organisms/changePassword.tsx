import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignInForm } from "../../Types";
import { inputTypes } from "../../utils/enums";
import { Button } from "../atoms/button";
import { InputField } from "../molecules/inputField";

export const ChangePassword = () => {
  const { register, handleSubmit } = useForm<SignInForm>();
  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name="oldPassword"
        placeholder="Stare Hasło"
        type={inputTypes.password}
        register={register}
      />
      <InputField
        name="newPassword"
        placeholder="Nowe Hasło"
        type={inputTypes.password}
        register={register}
      />
      <InputField
        name="repeatPassword"
        placeholder="Powtórz Hasło"
        type={inputTypes.password}
        register={register}
      />

      <Button
        text="Zapisz"
        styleType="secondary"
        clicked={handleSubmit(onSubmit)}
      />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  > * {
    margin: auto;
    margin-bottom: 2.5rem;
  }

  > button {
    padding: 1rem 5rem;
  }
`;
