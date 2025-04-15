import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    width: 3rem;
    height: 3rem;
    border: 0px;
    option {
      width: 4rem;
      height: 2rem;
      padding-left: 25px;
      background: transparent;
    }
  }
  img {
    width: 1.5rem;
    heigth: 1.5rem;
  }

  select,
  input,
  label {
    cursor: pointer;
  }
`;
