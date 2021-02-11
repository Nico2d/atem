import React, { useState } from "react";
import styled from "styled-components";
import { IconDropdown } from "../../public/icons/IconDropdown";
import { OutsideMethod } from "./OutsideMethod";

interface Option {
  name: string;
  value: any;
}

type SelectTypes = {
  optionList: Array<Option>;
  method: (e: any) => void;
  defaultValue?: Option;
};

export const Select: React.FC<SelectTypes> = ({
  optionList,
  method,
  defaultValue = optionList[0],
}) => {
  const [value, setValue] = useState<Option>(defaultValue);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const hideOptions = () => {
    setIsHidden(!isHidden);
  };

  const selectOption = (item: Option) => {
    setValue(item);
    method(item.value);
    setIsHidden(true);
  };

  return (
    <Container>
      <OutsideMethod method={hideOptions} isActive={isHidden}>
        <SelectedValue onClick={hideOptions}>
          {value.name} <IconDropdown />
        </SelectedValue>

        <Options isHidden={isHidden}>
          {optionList.map((item, index) => {
            return (
              <li
                key={index}
                value={item.value}
                onClick={() => {
                  selectOption(item);
                }}
              >
                {item.name}
              </li>
            );
          })}
        </Options>
      </OutsideMethod>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
  position: relative;
  width: 110px;
`;

const SelectedValue = styled.p`
  margin: 0;
  padding-left: 10px;

  > svg {
    fill: ${({ theme }) => theme.colors.fontColor};
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  &::after {
    position: absolute;
    content: "";
    bottom: -5px;
    right: 0;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Options = styled.ul<{ isHidden: boolean }>`
  position: absolute;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.background};
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  flex-flow: column;
  left: 0;
  top: 9px;
  width: 100%;
  padding: 0;
  z-index: 99;

  > li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.linesColor};
    padding: 5px 10px;
    font-weight: 200;
    font-size: ${({ theme }) => theme.fonts.fontSize * 0.8}rem;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
