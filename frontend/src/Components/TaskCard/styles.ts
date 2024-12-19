import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #efefef;
  background-color: #222;
  padding: 1em;
  border-radius: 1em;
  margin: 1.5em;
  button {
    margin-top: 1em;
    background-color: #700070;
    color: white;
    &:hover {
      background-color: #500050;
      cursor: pointer;
    }
  }
`;
