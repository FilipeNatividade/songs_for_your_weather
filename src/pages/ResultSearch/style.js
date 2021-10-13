import styled from "styled-components";

export const Container = styled.div`
  color: #e61d75;
  padding: 25px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const BackButton = styled.button`
  background-color: transparent;
  margin-left: -30px;
  .backButton {
    color: #fff;
    width: 50px;
  }
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 30px;
  margin-top: 25px;
  text-align: center;
`;

export const TempContainer = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 5px solid #fff;
  background-color: #f56faa;
  color: #fff;
  font-weight: bolder;
  display: flex;
  height: 250px;
  justify-content: center;
  margin-top: 25px;
  width: 250px;
`;

export const Temp = styled.p`
  border-right: 5px solid #fff;
  font-size: 40px;
  margin-right: 10px;
  padding-right: 10px;
`;
export const TempMinMax = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 25px;
`;
