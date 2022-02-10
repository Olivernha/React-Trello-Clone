import {
  AppContainer
} from "./styles";
import Column from "./Column";
import { AddNewItem } from "./AddNewItem";

const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem onAdd={console.log} toggleButtonText={`Add another list`} />
    </AppContainer>
  );
};
export default App;
