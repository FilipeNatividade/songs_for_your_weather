import InputContent from "./Components/InputContent";
import Routes from "./Routes";
import GlobalStyle from "./GlobalStyle";
import { useValueContext } from "./Providers/ValueContext";
import ButtonFavorite from "./Components/ButtonFavorite";
import MessageError from "./Components/MessageError";

const App = () => {
  const { catchError} = useValueContext();
  return (
    <div className="App">
      <GlobalStyle />
      {catchError && <MessageError />}
      <InputContent />
      <ButtonFavorite />
      <Routes />
    </div>
  );
};

export default App;
