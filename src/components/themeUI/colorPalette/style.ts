import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledColorPalette = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  padding-bottom: 20px;
  overflow: scroll;
`;

const StyledColorItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

const StyledColorItem = styled.div<{ bgColor: string; textColor: string }>`
  ${({ bgColor, textColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${bgColor};
    color: ${textColor};
    width: 100%;
    aspect-ratio: 1.8/1;
    border-radius: 4px;
  `}
`;

const StyledColorItemLabel = styled.p<{ color: string }>`
  ${({ theme, color }) => css`
    color: ${color};
    ${theme.fontSizes["16M"]};
  `}
`;

export {
  StyledColorPalette,
  StyledColorItemWrapper,
  StyledColorItem,
  StyledColorItemLabel,
};
