/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { theme } from "../../../styles/theme";
import {
  StyledColorItem,
  StyledColorItemLabel,
  StyledColorItemWrapper,
  StyledColorPalette,
} from "./style";
import {
  StyledOptionLabel,
  StyledOptionTitle,
  StyledOptionWrapper,
  StyledSelect,
} from "../style";

const { white } = theme.colors;

type ColorPaletteType = {
  bgColorOptionList: { label: string; value: string }[];
  colorPalette: {
    colorName: string;
    colorScale: { label: string; value: string }[];
  }[];
};

function ColorPalette({ bgColorOptionList, colorPalette }: ColorPaletteType) {
  const [isTextColor, setIsTextColor] = useState<boolean>(false);
  const [textColor, setTextColor] = useState<string>(white[10]);

  function handleBgColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    document.body.style.setProperty(
      "background-color",
      `${e.currentTarget.value}`,
      "important",
    );
    document.body.style.setProperty("transition", "background-color 0.3s ease");
  }

  function handleTextColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setTextColor(e.currentTarget.value);
  }

  function handleTextColorVisible(e: React.ChangeEvent<HTMLSelectElement>) {
    setIsTextColor(e.currentTarget.value === "true" ? true : false);
  }

  return (
    <>
      <StyledOptionTitle>Color Palette</StyledOptionTitle>
      <StyledOptionWrapper>
        <div>
          <StyledOptionLabel>Background color</StyledOptionLabel>
          <StyledSelect defaultValue={white[10]} onChange={handleBgColorChange}>
            {bgColorOptionList.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        </div>

        <div>
          <StyledOptionLabel>VIew text color</StyledOptionLabel>
          <StyledSelect
            defaultValue={"false"}
            onChange={handleTextColorVisible}
          >
            <option value={"true"}>True</option>
            <option value={"false"}>False</option>
          </StyledSelect>
        </div>

        {isTextColor && (
          <div>
            <StyledOptionLabel>Text color</StyledOptionLabel>
            <StyledSelect
              defaultValue={white[10]}
              onChange={handleTextColorChange}
            >
              {bgColorOptionList.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </StyledSelect>
          </div>
        )}
      </StyledOptionWrapper>

      {colorPalette.map(({ colorScale, colorName }) => (
        <StyledColorPalette key={colorName}>
          {colorScale.map(({ value, label }) => (
            <StyledColorItemWrapper key={value}>
              <StyledColorItem bgColor={value} textColor={textColor}>
                {isTextColor && "Text color"}
              </StyledColorItem>
              <StyledColorItemLabel color={value}>{label}</StyledColorItemLabel>
            </StyledColorItemWrapper>
          ))}
        </StyledColorPalette>
      ))}
    </>
  );
}
export default ColorPalette;
