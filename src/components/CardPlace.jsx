import React from "react";
import styled from "styled-components";

const StyledCardPlace = styled.li`
  width: 50%;

  h1 {
    font-weight: bold;
  }
`;

function CardPlace({ place }) {
  const { day, location, service } = place;
  return (
    <StyledCardPlace>
      <h1>{day}</h1>
      <ul></ul>
    </StyledCardPlace>
  );
}

export default CardPlace;
