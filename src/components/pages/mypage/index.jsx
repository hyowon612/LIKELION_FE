import React from "react";
import { MyPageSection } from "./styled";
import MyList from "../../shared/mylist";
import { useState } from "../../../Context";

const MyPage = () => {

  const mylist = useState();
  return (
    <MyPageSection>
      {mylist.map((mylist) => (
        <MyList
          id={mylist.id}
          done={mylist.done}
          name={mylist.name}
          category={mylist.category}
        />
      ))}
    </MyPageSection>
  )
}

export default MyPage;