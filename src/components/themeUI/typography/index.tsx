import { useState } from "react";
import { SerializedStyles } from "@emotion/react";
import { theme } from "../../../styles/theme";
import {
  StyledTextInput,
  StyledTypographyItem,
  StyledTypographyName,
} from "./style";
import {
  StyledOptionLabel,
  StyledOptionTitle,
  StyledOptionWrapper,
  StyledSelect,
} from "../style";

const { black } = theme.colors;

type TypographyPropsType = {
  typographyScale: { label: string; value: SerializedStyles }[];
  textColorOptionList: { label: string; value: string }[];
};

function Typography({
  typographyScale,
  textColorOptionList,
}: TypographyPropsType) {
  const [textValue, setTextValue] = useState("Hello world");
  const [textColor, setTextColor] = useState<string>(black[10]);

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextValue(e.target.value);
  }

  function handleTextColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setTextColor(e.currentTarget.value);
  }

  return (
    <>
      <StyledOptionTitle>Typography</StyledOptionTitle>
      <StyledOptionWrapper>
        <div>
          <StyledOptionLabel>Text value</StyledOptionLabel>
          <StyledTextInput type="text" onChange={handleTextChange} />
        </div>
        <div>
          <StyledOptionLabel>Text color</StyledOptionLabel>
          <StyledSelect
            onChange={handleTextColorChange}
            defaultValue={black[10]}
          >
            {textColorOptionList.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </StyledSelect>
        </div>
      </StyledOptionWrapper>
      {typographyScale.map(({ label, value }) => (
        <div key={label}>
          <StyledTypographyItem color={textColor} cssProperty={value}>
            <p>{textValue.length ? textValue : "hello world"}</p>
            <StyledTypographyName>{label}</StyledTypographyName>
          </StyledTypographyItem>
        </div>
      ))}
    </>
  );
}

export default Typography;
