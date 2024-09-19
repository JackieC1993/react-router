import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewsLetter() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <section>
      <h3>Sign Up For Our Newsletter</h3>
      <button onClick={handleClick}>Sign me up for hourly updates!</button>
    </section>
  );
}
