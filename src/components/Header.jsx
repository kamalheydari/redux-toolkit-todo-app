import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

//? components
import { Modal, Select, Button } from ".";

//? actions
import { filterTodos } from "../app/todoSlice";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  //? store
  const { filterStatus } = useSelector((state) => state.todo);

  //? handlers
  const handleUpdateFilter = (e) => {
    dispatch(filterTodos(e.target.value));
  };

  return (
    <Wrapper>
      <Button
        type='button'
        variant='primary'
        onClick={() => setIsModalOpen(true)}
      >
        add task
      </Button>
      <Select size='mini' value={filterStatus} onChange={handleUpdateFilter}>
        <option value='all'>All</option>
        <option value='complete'>Complete</option>
        <option value='incomplete'>Incomplete</option>
      </Select>
      <Modal
        type='add'
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Wrapper>
  );
};

//? styles

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export default Header;
