import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  CardContainer,
} from "./styles";
import Column from "./Column";

const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
    </AppContainer>
  );
};
export default App;
