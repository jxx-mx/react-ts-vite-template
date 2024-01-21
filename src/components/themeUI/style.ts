import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  padding: 40px 10%;
`;

const StyledOptionTitle = styled.h2`
  filter: invert(30%);
  ${({ theme }) => theme.fontSizes["32B"]};
  padding: 20px 0;
`;

const StyledOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 40px;

  & > div {
    width: 100%;
  }
`;

const StyledOptionLabel = styled.p`
  filter: invert(30%);
  padding-bottom: 8px;
  ${({ theme }) => theme.fontSizes["18B"]};
`;

const StyledSelect = styled.select`
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
export {
  StyledWrapper,
  StyledOptionTitle,
  StyledOptionWrapper,
  StyledOptionLabel,
  StyledSelect,
};
