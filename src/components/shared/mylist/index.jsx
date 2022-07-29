import React from "react";
import { MyListSection, Check, Name, Category, Remove } from "./styled";
import { useDispatch } from "../../../Context";

const MyList = ({ id, done, name, category }) => {

  const dispatch = useDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <MyListSection>
      <Check onClick={onToggle}>
        {done ? <img src={"/assets/checked.png"} alt="" /> : <img src={"/assets/unchecked.png"} alt="" />}
      </Check>
      <Name>{name}</Name>
      <Category>{category}</Category>
      <Remove onClick={onRemove}>
        <img src={"/assets/remove.png"} alt="" />
      </Remove>
    </MyListSection>
  )
}

export default MyList;