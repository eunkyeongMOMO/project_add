import GlobalStyle from "@src/assets/styles/global-styles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import Footer from "./footer/Footer";
//import Header from "./header/Header";
import Header from "./common/header";
// import Sidebar from "./sidebar/Sidebar";
// import { useSpring } from "@react-spring/web";
// import GateIndex from "@src/components/hackersGate/GateIndex"; 

function Layout({ children }: { children: React.ReactChild }) {
  useEffect(() => {

  }, []);

  return (
    <div>
      <Header />
      <GlobalStyle />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;