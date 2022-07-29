import React from "react";
import { PageSection } from "./styled";
import List from "../list";

const Page = ({ category }) => {
  return (
    <PageSection>
      {category.map((list) => {
        return (
          <List name={list.name} category={list.category}/>
        )
      })}
    </PageSection>
  )
}

export default Page;