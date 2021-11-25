import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© BONU PAVAN KUMAR &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
