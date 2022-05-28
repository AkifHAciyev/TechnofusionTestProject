import React from "react";
import { VscError } from "react-icons/vsc";

function Error() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <VscError />
      <span
        style={{ color: "red", fontFamily: "Times" }}
      >{`Sorry, We don't have this id yet`}</span>
    </div>
  );
}

export default Error;
