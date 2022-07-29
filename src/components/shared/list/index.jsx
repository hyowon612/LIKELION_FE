import React from "react";
import { ListSection, Name, Category } from "./styled";
import { useDispatch, useNextId } from '../../../Context';

const List = ({ name, category }) => {

  const dispatch = useDispatch();
  const nextId = useNextId();
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      item: {
        id: nextId.current,
        name: name, 
        category: category,
        done: false
      }
    });
    nextId.current += 1
    alert("추가되었습니다.");
  }
  return (
    <ListSection onClick={onSubmit}>
      <Name>{name}</Name>
      <Category>{category}</Category>
    </ListSection>
  )
}

export default List;