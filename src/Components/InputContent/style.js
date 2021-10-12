import styled from "styled-components";

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  width: 100%;
`;
export const Label = styled.h2`
  font-size: 30px;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;
export const InputCity = styled.input`
  border-radius: 5px;
  height: 35px;
  padding: 0 15px;
  margin-right: 10px;
  width: 100%;
`;

export const ButtonSearch = styled.button`
  border-radius: 5px;
  border: 2px solid #fabfd9;
  background-color: transparent;
  width: 35px;
  .iconButton {
    width: 22px;
    color: #fabfd9;
  }
`;
