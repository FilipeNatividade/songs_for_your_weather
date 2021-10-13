import { useState } from "react";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import { useValueContext } from "../../Providers/ValueContext";
import { Container, Content, Label, InputCity, ButtonSearch } from "./style";
import { useHistory } from "react-router";

const InputContent = () => {
  const history = useHistory();
  const { setCity } = useValueContext();
  const [cityInput, setInputCity] = useState("");

  const handleGetCity = () => {
    setCity(cityInput);
    cityInput && history.push("/resultSearch");
    setInputCity("");
  };

  const handleKeyPress = (event) => {
    event.key === "Enter" && handleGetCity();
  };

  return (
    <Container>
      <Label>Cidade: </Label>
      <Content>
        <InputCity
          onKeyPress={handleKeyPress}
          value={cityInput}
          type="text"
          onChange={(e) => setInputCity(e.target.value)}
        />

        <ButtonSearch onClick={handleGetCity}>
          <SearchAlt className="iconButton" />
        </ButtonSearch>
      </Content>
    </Container>
  );
};

export default InputContent;
