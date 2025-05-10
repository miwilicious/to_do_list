// import {AddToList} from './AddToList'
import { useState } from "react";
import { ShowList } from "./ShowList/ShowList";
import { AddToList } from "./AddToList/AddToList";
import { Todo } from "../../models/ToDo";

export const AppToDoList = () => {
  const [toDos, setToDos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("toDos") || "[]")
  );

  const addToList = (text: string) => {
    setToDos([...toDos, new Todo(Date.now(), text)]);
  };

  const removeToDo = (id: number) => {
    setToDos(toDos.filter((t) => t.id !== id));
  };

  const toggleToDo = (id: number) => {
    setToDos(
      toDos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      })
    );
  };
  localStorage.setItem("toDos", JSON.stringify(toDos));
  return (
    <>
      <AddToList addToDo={addToList} />
      <ShowList
        theToDoList={toDos}
        remove={removeToDo}
        toggleToDo={toggleToDo}
      />
    </>
  );
};
