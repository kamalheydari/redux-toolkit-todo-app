import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

//? icons
import { MdOutlineClose } from "react-icons/md";

//? components
import { Button, Select } from ".";

//? actions
import { addTodo, updateTodo } from "../app/todoSlice";

const Modal = ({ isModalOpen, setIsModalOpen, type, todo }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, isModalOpen]);

  //? handlers
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") toast.error("Please enter a title");

    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task added successfully");
        setIsModalOpen(false);
        setTitle("");
        setStatus("incomplete");
      }
      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success("Task update successfully");
        } else {
          toast.error("No changes made");
          return;
        }
      }
      setIsModalOpen(false);
    }
  };

  return (
    isModalOpen && (
      <Wrapper>
        <div className='modal'>
          <form className='form' onSubmit={handleSubmit}>
            <h3>{type === "update" ? "Update" : "Add"} Todo</h3>
            <div className='control'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='control'>
              <label htmlFor='status'>Status</label>
              <Select
                size='large'
                id='status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value='complete'>Complete</option>
                <option value='incomplete'>Incomplete</option>
              </Select>
            </div>
            <div className='btns'>
              <Button type='submit' variant='primary'>
                {type === "update" ? "Update" : "Add"}task
              </Button>
              <Button
                type='button'
                variant='secondary'
                onClick={() => setIsModalOpen(false)}
              >
                cancel
              </Button>
            </div>
          </form>
          <Button
            variant='icon'
            className='close'
            onClick={() => setIsModalOpen(false)}
          >
            <MdOutlineClose />
          </Button>
        </div>
      </Wrapper>
    )
  );
};

//? styles
const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 1000;

  .modal {
    background-color: var(--bg-2);
    width: min(500px, 90%);
    padding: 2rem;
    border-radius: 8px;
    position: relative;

    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      transition: 0.3s;
      &:hover {
        background-color: var(--red);
        color: var(--white);
      }
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem 0;

    label {
      font-size: 1.6rem;
      color: var(--black-1);
    }
    input {
      width: 100%;
    }
    input,
    select {
      padding: 1rem;
      background-color: var(--white);
      font-size: 1.6rem;
    }
    .btns {
      button {
        margin-right: 2rem;
      }
    }
  }
`;

export default Modal;
