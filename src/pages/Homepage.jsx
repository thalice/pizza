import React from "react";
import Background from "../components/ Background";
import styled from "styled-components";

const StyledHomepage = styled.div`
  display: flex;
  justify-content: space-between;

  .text {
    width: 60vh;
    font-weight: bold;
    font-size: 100px;
  }
`;

function Homepage() {
  return (
    <StyledHomepage>
      <Background />
      <div>
        <h1 className="text">Street Food:</h1>
        <p className="text">Pizza au coin de la rue</p>
      </div>
    </StyledHomepage>
  );
}

export default Homepage;
