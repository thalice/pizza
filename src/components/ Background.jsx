import React from "react";
import styled from "styled-components";

const StyledRolling = styled.div`
  position: relative;
  background-image: url("/images/background.png");
  width: 120vh;
  height: 90vh;
  background-size: cover;
  background-position: 0 0;
  background-repeat: repeat-x;
  animation: animate 5s linear infinite;

  .tuktuk {
    position: absolute;
    bottom: 0%;
    left: 40%;
    width: 30%;
    height: auto;
  }

  @keyframes animate {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }
`;

function Background() {
  return (
    <StyledRolling>
      <img className="tuktuk" src="/images/tuk.png" alt="tuktuk"></img>
    </StyledRolling>
  );
}

export default Background;
