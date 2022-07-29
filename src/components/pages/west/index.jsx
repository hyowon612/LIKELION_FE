import React, { useState, useEffect } from "react";
import { WestSection } from "./styled";
import Api from "../../../apis/service";
import Loading from "../../../Loading";
import Page from "../../shared/page";

const api = new Api();

const West = () => {
  const [westList, setWestList] = useState([]);
  const [loading, setLoading] = useState(null);

  const getWestData = async () => {
    try {
      const west = await api.getWestList();
      setWestList(west);
      console.log(west);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getWestData();
  }, []);

  return (
    <WestSection>
      <Page category={westList}/>
      {loading && <Loading />}
    </WestSection>
  )
}

export default West;