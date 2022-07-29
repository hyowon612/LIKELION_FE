import React, { useState, useEffect } from "react";
import { CnSection } from "./styled";
import Api from "../../../apis/service";
import Loading from "../../../Loading";
import Page from "../../shared/page";

const api = new Api();

const Cn = () => {
  const [cnList, setCnList] = useState([]);
  const [loading, setLoading] = useState(null);

  const getCnData = async () => {
    try {
      const cn = await api.getCnList();
      setCnList(cn);
      console.log(cn);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getCnData();
  }, []);

  return (
    <CnSection>
      <Page category={cnList}/>
      {loading && <Loading />}
    </CnSection>
  )
}

export default Cn;