import styled from 'styled-components';

export const ReadTimeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 50rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-margin-top: -100px;
  margin: 1rem 0;

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    padding: 0.5rem;
    gap: 2rem;
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  span,
  h1,
  h2 p {
    width: 80%;
  }
`;
