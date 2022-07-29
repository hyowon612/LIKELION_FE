import axios from "axios";
import apiUrl from "./api";

class Api {
  constructor() {
    this.base = axios.create();
    this.allUrl = apiUrl.all;
    this.krUrl = apiUrl.kr;
    this.cnUrl = apiUrl.cn;
    this.jpUrl = apiUrl.jp;
    this.westUrl = apiUrl.west;
    this.cafeUrl = apiUrl.cafe;
  }

  async getAllList() {
    const url = this.allUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getKrList() {
    const url = this.krUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getCnList() {
    const url = this.cnUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getJpList() {
    const url = this.jpUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getWestList() {
    const url = this.westUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }

  async getCafeList() {
    const url = this.cafeUrl;

    const response = await this.base.get(url);
    const result = await response.data;
    
    return result;
  }
}

export default Api;