import styled from "styled-components";

export const Top = styled.div`
  padding-top: 10%;
`;

// Main Conatiner
export const Div = styled.div`
  width: 460px;
  background: #2d2f30;
  border-radius: 25px;
`;

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 35px;
`;

export const Img = styled.img`
  width: 200px;
`;

// Search Conatiner
export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  background: #2d2f30;
  border-radius: ${({ length }) => (length !== 0 ? "15px 15px 0 0" : "25px")};
`;

export const Input = styled.input`
  flex: 1;
  border: 0;
  background: transparent;
  padding: 16px 24px;
  color: #f2f2f2;
  outline: 0;
  max-width: 100%;
  border-radius: 25px;
`;

export const Spinner = styled.div`
  border: 2px solid #697689; /* Light grey */
  border-top: 2px solid #fff; /* Blue */
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const IconContainer = styled.div`
  border-left: 1px solid #000;
  margin-left: 10px;
`;

export const IconBox = styled.div`
  background: #ffe81f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 50%;
  margin: 0 10px 0 8px;
`;

export const Line = styled.div`
  border-bottom: 1px solid #000;
`;

export const LineContainer = styled.div`
  width: 95%;
  margin: auto;
`;

export const SuggestionBox = styled.div`
  display: ${({ length }) => (length !== 0 ? "flex" : "none")};
  flex-direction: column;
  max-width: 100%;
  background: #2d2f30;
  padding: 0 0 10px 0;
  color: #fff;
  border: 0;
  border-radius: 0 0 15px 15px;
`;

// Individual Suggestion Container
export const ItemContainer = styled.div`
  padding: 8px 4px 8px 4px;
  &:hover {
    background: #242627;
  }
  background: ${({ check }) => (check === true ? "#242627" : "#2d2f30")};
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 17px 0 17px;
`;

export const Grey = styled.div`
  color: #8b9dad;
  font-size: 12px;
  margin: 0;
`;

export const LightGrey = styled.div`
  color: #98acbc;
  font-size: 11px;
  padding: 0 17px 0 17px;
`;
