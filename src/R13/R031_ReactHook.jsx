import React, { useState, useEffect } from "react";

export default function ReactHook(props) {
  const [contents, setContents] = useState("[THIS IS REACT ]");

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div style={{ padding: "0px" }}>
      <h2>{contents}</h2>
      <botton onClick={() => setContents("[THIS IS HOOK ]")}>버튼</botton>
    </div>
  );
}
