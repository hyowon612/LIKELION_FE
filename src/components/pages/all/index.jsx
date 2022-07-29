import React, { useState, useEffect } from "react";
import { AllSection } from "./styled";
import Api from "../../../apis/service";
import Loading from "../../../Loading";
import Page from "../../shared/page";

const api = new Api();

const All = () => {
  const [allList, setAllList] = useState([]);
  const [loading, setLoading] = useState(null);

  const getAllData = async () => {
    try {
      const all = await api.getAllList();
      setAllList(all);
      console.log(all);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getAllData();
  }, []);

  return (
    <AllSection>
      <Page category={allList}/>
      {loading && <Loading />}
    </AllSection>
  )
}

export default All;