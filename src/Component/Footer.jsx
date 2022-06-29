import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> ⓒRidhim Singh Raizada   {year}</p>
    </footer>
  );
}

export default Footer;
