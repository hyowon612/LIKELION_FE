import React, { useState, useEffect } from "react";
import { KrSection } from "./styled";
import Api from "../../../apis/service";
import Loading from "../../../Loading";
import Page from "../../shared/page";

const api = new Api();

const Kr = () => {
  const [krList, setKrList] = useState([]);
  const [loading, setLoading] = useState(null);

  const getKrData = async () => {
    try {
      const kr = await api.getKrList();
      setKrList(kr);
      console.log(kr);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getKrData();
  }, []);

  return (
    <KrSection>
      <Page category={krList}/>
      {loading && <Loading />}
    </KrSection>
  )
}

export default Kr;