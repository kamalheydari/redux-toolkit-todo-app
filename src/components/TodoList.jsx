import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//? components
import { TodoItem } from ".";

const TodoList = () => {
  //? store
  const { todoList, filterStatus } = useSelector((state) => state.todo);

  const filterTodoList = todoList.filter((todo) => {
    if (filterStatus === "all") {
      return true;
    }
    return todo.status === filterStatus;
  });

  return (
    <Wrapper>
      {filterTodoList && filterTodoList.length > 0 ? (
        filterTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <span>Todos not found</span>
      )}
    </Wrapper>
  );
};

//? styles
const Wrapper = styled.div`
  background-color: var(--bg-2);
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  span {
    color: var(--black-2);
    font-size: 1.5rem;
  }
`;

export default TodoList;
