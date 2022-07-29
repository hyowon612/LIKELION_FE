import React, { useState, useEffect } from "react";
import { CafeSection } from "./styled";
import Api from "../../../apis/service";
import Loading from "../../../Loading";
import Page from "../../shared/page";

const api = new Api();

const Cafe = () => {
  const [cafeList, setCafeList] = useState([]);
  const [loading, setLoading] = useState(null);

  const getCafeData = async () => {
    try {
      const cafe = await api.getCafeList();
      setCafeList(cafe);
      console.log(cafe);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getCafeData();
  }, []);

  return (
    <CafeSection>
      <Page category={cafeList}/>
      {loading && <Loading />}
    </CafeSection>
  )
}

export default Cafe;