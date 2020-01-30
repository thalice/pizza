import React from "react";
import styled from "styled-components";

const StyledPizzaCard = styled.li`
  border: 1px solid black;
  width: 50%;

  h1 {
    font-weight: bold;
  }
`;

function CardPizza({ pizza }) {
  const { title, ingredients, image } = pizza;
  return (
    <StyledPizzaCard>
      <h1>{title}</h1>
      <ul>
        <li>
          {ingredients.map(i => {
            return <li>{i}</li>;
          })}
        </li>
      </ul>
    </StyledPizzaCard>
  );
}

export default CardPizza;
