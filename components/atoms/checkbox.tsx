import React from "react";
import styled from "styled-components";

export const Checkbox: React.FC<inputProps> = React.memo(
  ({ checked, checkedHandler, name, register, ...props }: inputProps) => {
    return (
      <CheckboxContainer>
        <HiddenCheckbox
          name={name}
          ref={register}
          checked={checked}
          {...props}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            checkedHandler(event)
          }
        />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    );
  }
);

type inputProps = {
  [x: string]: any;
  checked: boolean;
  name: string;
  register?: any;
  checkedHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${(props) => props.theme.colors?.primary};
  stroke-width: 2px;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors?.primary};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
