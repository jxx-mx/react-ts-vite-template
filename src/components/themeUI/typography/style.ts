import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledTextInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: #ddd;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
`;

const StyledTypographyItem = styled.div<{
  cssProperty: SerializedStyles;
  color: string;
}>`
  ${({ theme, cssProperty, color }) => css`
    ${cssProperty}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 4px;
    border-bottom: 1px solid ${theme.colors.gray[90]};
    cursor: pointer;
    color: ${color};

    &:hover {
      border-bottom: 2px solid ${theme.colors.gray[90]};
      padding: 12px 24px 12px 4px;
    }

    transition: all 0.2s ease-in-out;
  `}
`;

const StyledTypographyName = styled.p`
  ${({ theme }) => theme.fontSizes["16M"]};
`;

export { StyledTextInput, StyledTypographyItem, StyledTypographyName };
