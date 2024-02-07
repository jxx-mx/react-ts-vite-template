import styled from "@emotion/styled";
import React from "../../assets/react.svg?react";
import { css } from "@emotion/react";

function Main() {
  return (
    <StyledMain>
      <div>
        <StyledSVG>
          <React />
        </StyledSVG>
        <StyledButton
          href="https://github.com/jxx-mx/react-ts-vite-template"
          target="_blank"
        >
          Visit Github Repository
        </StyledButton>
      </div>
    </StyledMain>
  );
}
export default Main;

const StyledMain = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.black[10]};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const StyledButton = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 12px 20px;
    border-radius: 8px;
    ${theme.fontSizes["14M"]};
    color: ${theme.colors.white[10]};
    transition: box-shadow 0.3s ease;
    border: 1px solid ${theme.colors.blue[30]};

    &:hover {
      box-shadow: 0 0 10px 0 ${theme.colors.blue[20]};
    }
  `}
`;

const StyledSVG = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-bottom: 40px;

  & > svg {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    animation: rotateAnimation 12s infinite linear;
  }

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
