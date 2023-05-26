import React from 'react';
import Link from "next/link";
import CusCtrTop from "@src/components/cs/CusCtrTop";
import FrqAskQst from "@src/components/cs/FrqAskQst";


function index() {
  return (
    <div>
      <CusCtrTop />
      <FrqAskQst />
    </div>

  );
}

export default index;