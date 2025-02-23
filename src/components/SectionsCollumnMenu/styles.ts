import styled from 'styled-components';

export const SectionsMenuContainer = styled.div`
  position: sticky;
  top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  background: red;
  min-height: 5rem;
  max-height: 80vh;
  overflow: auto;
  min-width: 25%;
  background-color: #fff;
  gap: 2rem;
  margin-top: 6rem;
  strong {
    font-size: 1.375rem;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    div {
      display: flex;
      gap: 0.5;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  & > nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    a {
      color: #5c5b5b;
      font-size: 1rem;
    }
    .currentSection {
      color: #000;
      font-weight: bold;
    }

    .preCurrentSection {
      color: #000;
    }
  }
  @media (max-width: 720px) {
    top: 0;
    justify-content: start;
    height: 3rem;
    align-items: center;
    flex-direction: row;
    padding: 0.5rem;
    gap: 1rem;
    overflow-x: scroll;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
    margin: 0;

    strong {
      font-size: 1rem;
    }
    & > nav {
      padding: 0rem 1rem;
      flex-direction: row;
      height: 3rem;
    }
  }
`;
