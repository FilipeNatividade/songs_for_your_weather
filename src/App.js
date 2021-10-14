import InputContent from "./Components/InputContent";
import Routes from "./Routes";
import GlobalStyle from "./GlobalStyle";
import ButtonFavorite from "./Components/ButtonFavorite";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <InputContent />
      <ButtonFavorite />
      <Routes />
    </div>
  );
};

export default App;
