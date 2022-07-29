import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from "./components/template";
import Header from "./components/header";
import Navigation from './components/navigation';
import All from "./components/pages/all";
import Kr from "./components/pages/kr";
import Cn from "./components/pages/cn";
import Jp from "./components/pages/jp";
import West from "./components/pages/west";
import Cafe from "./components/pages/cafe";
import MyPage from "./components/pages/mypage";
import { Provider } from './Context';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const App = () => {
  return (
    <>
      <Provider>
        <GlobalStyle />
        <Template>
          <BrowserRouter>
            <Header />
            <Navigation />
            <Routes>
              <Route path="/" element={<All/>}/>
              <Route path="/kr" element={<Kr/>}/>
              <Route path="/cn" element={<Cn/>}/>
              <Route path="/jp" element={<Jp/>}/>
              <Route path="/west" element={<West/>}/>
              <Route path="/cafe" element={<Cafe/>}/>
              <Route path="/mypage" element={<MyPage/>}/>
            </Routes>
          </BrowserRouter>
        </Template>
      </Provider>
    </>
  )
}

export default App;
