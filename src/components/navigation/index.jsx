import React from "react";
import { Link } from "react-router-dom";
import { NavigationSection } from "./styled";

const Navigation = () => {
  return (
    <NavigationSection>
      <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/`}>전체</Link>
      <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/kr/`}>한식</Link>
      <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/cn/`}>중식</Link>
      <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/jp/`}>일식</Link>
      <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/west/`}>양식</Link>
      <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/cafe/`}>카페</Link>
      <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/mypage/`}>마이페이지</Link>
    </NavigationSection>
  )
}

export default Navigation;