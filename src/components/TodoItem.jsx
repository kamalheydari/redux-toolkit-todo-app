import React, { useEffect, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

//? icons
import { MdDelete, MdEdit, MdCheck } from "react-icons/md";

//? components
import { Button, Modal } from ".";

//? actions
import { deleteTodo, updateTodo } from "../app/todoSlice";

const TodoItem = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const disptach = useDispatch();

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  //? handlers
  const handleDelete = () => {
    disptach(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };

  const handleCheck = () => {
    setChecked(!checked);
    disptach(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };

  const handleUpdate = () => {
    setIsUpdateModalOpen(true);
  };

  return (
    <>
      <Wrapper checked={checked}>
        <div className='check'>
          <Button variant='icon' type='button' onClick={handleCheck}>
            <MdCheck />
          </Button>
        </div>
        <div className='content'>
          <p className='title'>{todo.title}</p>
          <p className='time'>{todo.time}</p>
        </div>
        <div className='btns'>
          <Button variant='icon' onClick={handleDelete}>
            <MdDelete />
          </Button>
          <Button variant='icon' onClick={handleUpdate}>
            <MdEdit />
          </Button>
        </div>
      </Wrapper>
      <Modal
        isModalOpen={isUpdateModalOpen}
        setIsModalOpen={setIsUpdateModalOpen}
        type='update'
        todo={todo}
      />
    </>
  );
};

//? styles
const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  background: var(--white);
  align-items: center;

  .check {
    button {
      transition: 0.2s;
      color: ${(props) =>
        props.checked ? "var(--primaryGreen)" : "var(--gray-2)"};
    }
  }

  .content {
    margin: 0 auto 0 1rem;
    color: var(--black-2);

    .title{
      font-size: 1.3rem;
      text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
    } 
    }
  }

  .btns {
    display: flex;
    button {
      margin-left: 1rem;
      transition: 0.2s;
      &:hover {
        background-color: var(--gray-1);
      }
    }
  }
  `;
export default TodoItem;
