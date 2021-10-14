import styled from "styled-components";

export const Container = styled.div`
  color: #e61d75;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
`;

export const BackButton = styled.button`
  background-color: transparent;
  margin-left: -15px;
  margin-top: 25px;
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
  margin: 25px auto;
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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const BartButton = styled.button`
  background-color: transparent;
  .iconHeart {
    color: #fff;
    width: 25px;
  }
`;
