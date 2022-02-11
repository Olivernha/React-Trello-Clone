import { ColumnContainer, ColumnTitle } from "./styles";
import React from "react";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import {AddNewItem} from "./AddNewItem";
import { addTask } from "./state/actions"

type ColumnProps = {
  text: string;
  id: string;
};
const Column: React.FC<ColumnProps> = (props) => {
    const { getTasksByListId, dispatch } = useAppState()

  const tasks = getTasksByListId(props.id);
  return (
    <ColumnContainer>
      <ColumnTitle>{props.text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, props.id))}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
