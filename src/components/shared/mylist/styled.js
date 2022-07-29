import styled from "styled-components";

export const MyListSection = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 10px 16px;
  width: 100%;
  border-bottom: 1px solid #e9ecef;
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const Name = styled.div`
  font-size: 16px;
  margin-right: 2px;
`;

export const Category = styled.div`
  font-size: 11px;
`;

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #dee2e6;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;