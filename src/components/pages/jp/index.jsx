import React, { useState, useEffect } from "react";
import { JpSection } from "./styled";
import Api from "../../../apis/service";
import Loading from "../../../Loading";
import Page from "../../shared/page";

const api = new Api();

const Jp = () => {
  const [jpList, setJpList] = useState([]);
  const [loading, setLoading] = useState(null);

  const getJpData = async () => {
    try {
      const jp = await api.getJpList();
      setJpList(jp);
      console.log(jp);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getJpData();
  }, []);

  return (
    <JpSection>
      <Page category={jpList}/>
      {loading && <Loading />}
    </JpSection>
  )
}

export default Jp;