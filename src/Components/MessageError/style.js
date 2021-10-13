import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  color: #e61d75;
  display: flex;
  flex-direction: column;
  font-size: 55px;
  height: 90vh;
  margin: 0 auto;
  position: absolute;
  padding: 15px;
  width: 90%;
  z-index: 1;
  p {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 90%;
    text-align: center;
  }
  button {
    background-color: transparent;
    color: #e61d75;
    width: 50px;
  }
`;
